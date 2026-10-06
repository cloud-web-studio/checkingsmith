import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
// import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import visuallyHidden from '@mui/utils/visuallyHidden';
import { styled } from '@mui/material/styles';
import ModalCustom from './ModalCustom';
import Login from './Login';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';


const StyledBox = styled('div')(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
  height: 400,
  marginTop: theme.spacing(2),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: '6px solid',
  outlineColor: 'hsla(220, 25%, 80%, 0.2)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: '0 0 24px 12px hsl(210deg 100% 25% / 69%)',
  backgroundImage: `url(${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/screenshots/material-ui/getting-started/templates/dashboard.jpg)`,
  backgroundSize: 'cover',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(1),
    height: 300,
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 24px 12px hsl(210deg 100% 25% / 69%)',
    backgroundImage: `url(${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/screenshots/material-ui/getting-started/templates/dashboard-dark.jpg)`,
    outlineColor: 'hsla(220, 20%, 42%, 0.1)',
    borderColor: (theme.vars || theme).palette.grey[700],
  }),
}));

export default function Hero() {

  const [open, setOpen] = React.useState(false);
  const [AuthStatus, setAuthStatus] = React.useState(null);
  const [authstate, setauthstate] = React.useState('Sign In');
  const router = useRouter();
  const supabase = createClient()
  
  const HandleAuthSet = (value) => {
    setauthstate(value)
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const HandleFirstTime = async () => {
    const { data } = await supabase.auth.getSession()
    setAuthStatus(data.session)
  }


  React.useEffect(() => {
    HandleFirstTime()
  },[])
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 8 } }} >
        <Grid container spacing={2}>
          <Grid size={7}>

        
            <Stack spacing={2} useFlexGap sx={{ alignItems: 'left', width: { xs: '100%', sm: '100%' } }} >
              <Typography variant="h1" sx={{ display: 'column', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center' }} >
                High Performance, Low-Latency&nbsp;<br />
                <Typography component="span" variant="h1"
                  sx={(theme) => ({
                    fontSize: 'inherit',
                    color: 'primary.main',
                    ...theme.applyStyles('dark', {
                      color: 'primary.light',
                    }),
                  })}
                >
                  Sports API Data
                </Typography>
              </Typography>
              <Typography sx={{ textAlign: 'left', color: 'text.secondary', width: { sm: '100%', md: '80%' } }} >
                Get instant access to the best and highest quality REST Sports API solutions designed for large scale projects. 
                We provide updated Sports data and real-time insights delivered with fast, low latency best performance. 
                Whether you need live scores, livescores, odds, or deep statistic archives, our structured data format and JSON data ensure seamless integration for real time data tracking.
              </Typography>
              
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} useFlexGap sx={{ pt: 2, width: { xs: '100%', sm: '350px' } }} >
                <ModalCustom open={open} handleClose={handleClose}>
                  <Login authstate={authstate} HandleAuthSet={HandleAuthSet} />  
                </ ModalCustom>
                {AuthStatus == null ? 
                <Button component={Link} href="/" variant="contained" color="primary" size="small" sx={{ minWidth: 'fit-content' }} >
                  Try For Free ( No Card Needed )
                </Button> :
                <Button component={Link} href="/dashboard" variant="contained" color="primary" size="small" sx={{ minWidth: 'fit-content' }} >
                  Dashboard
                </Button>
                }
                {/* <Button component={Link} href="/sports/football-api/docs" color="primary" size="small"
                  sx={{ minWidth: 'fit-content', backgroundColor:'#4da6ff', boxShadow:'rgb(0 168 255 / 16%) 0px 0px 0px 1px inset, rgb(0 168 255 / 14%) 0px 4px 24px, rgb(0 168 255 / 62%) 0px 12px 48px' }}
                >
                  Documentation
                </Button> */}
              </Stack>

            </Stack>
          </Grid>
          <Grid size={5}>
            <StyledBox id="image" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
