'use client'
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '../shared-theme/ColorModeIconDropdown';
import { useColorScheme } from '@mui/material/styles';
import Sitemark from './SitemarkIcon';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import Link from 'next/link';
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const { setMode } = useColorScheme();
  const [open, setOpen] = React.useState(false);
  const [AuthStatus, setAuthStatus] = React.useState(null);
  const supabase = createClient()
  const router = useRouter();

  const HandleLogout = async () => {
    await supabase.auth.signOut()
    window.location.reload()
  }

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  const HandleFirstTime = async () => {
    const { data } = await supabase.auth.getSession()
    setAuthStatus(data.session)
  }


  React.useEffect(() => {
    setMode('dark')
    HandleFirstTime()
  },[])

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg" >
        <StyledToolbar variant="dense" disableGutters sx={{backgroundColor:'#0a2e5173'}}>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Sitemark />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              { AuthStatus &&  <Button component={Link} href="/" variant="text" color="info" size="small" sx={{fontSize:16}}>
                Dashboard
              </Button> }
              <Button component={Link} href="/" variant="text" color="info" size="small" sx={{fontSize:16}}>
                Home
              </Button>
              {/* <Button component={Link} href="/sports/football-api/docs" variant="text" color="info" size="small" sx={{fontSize:16}}>
                Documentation
              </Button> */}
              <Button component={Link} href="/sports/football-api" variant="text" color="info" size="small" sx={{fontSize:16}}>
                Football API
              </Button>
              <Button component={Link} href="/sports/football-api#pricing" variant="text" color="info" size="small" sx={{fontSize:16}}>
                Pricing
              </Button>
              <Button component={Link} href="/sports/football-api#contactus" variant="text" color="info" size="small" sx={{fontSize:16, minWidth: 0}} >
                Contact Us
              </Button>
              {/* <Button variant="text" color="info" size="small" sx={{fontSize:16, minWidth: 0}} >
                FAQ
              </Button> */}
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            {AuthStatus == null ? <>
            <Button component={Link} href="/" color="primary" variant="text" size="small" sx={{fontSize:16}}>
              Sign in
            </Button>
            <Button component={Link} href="/" color="primary" variant="contained" size="small" sx={{fontSize:16}}>
              Sign up
            </Button></> :<></> 
            // <Button onClick={HandleLogout} color="primary" variant="contained" size="small" sx={{fontSize:16}}> Sign out</Button>
             }
            {/* <ColorModeIconDropdown /> */}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            {/* <ColorModeIconDropdown size="medium" /> */}
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuItem>Features</MenuItem>
                <MenuItem>Testimonials</MenuItem>
                <MenuItem>Highlights</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>FAQ</MenuItem>
                <MenuItem>Blog</MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth>
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth>
                    Sign in
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
