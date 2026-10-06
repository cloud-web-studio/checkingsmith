import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import ForgotPassword from '../components/ForgotPassword';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from '../components/CustomIcons';
import { createClient } from '@/utils/supabase/client';
import Collapse from '@mui/material/Collapse';



const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
//   height:'100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '500px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
//   height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
//   backgroundColor:'red',
//   minHeight: '100%',
  padding: 0,
  [theme.breakpoints.up('sm')]: {
    padding: 0,
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function Login({authstate, HandleAuthSet}) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [Authmsg, setAuthmsg] = React.useState({
    status:false,
    msg:'',
    type:''
  });
  const supabase = createClient();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (emailError || passwordError) {
      return;
    }
    const formdata = new FormData(event.currentTarget);
    const email = formdata.get('email')
    const password = formdata.get('password')
    if(authstate == 'Sign In'){
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setAuthmsg({
          status:true,
          msg:error.message,
          type:'error'
        })
        // console.log("Sign up error:", error.message);
        return;
      }
      console.log("Signed in:", data);
      window.location.reload()
    }else{
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setAuthmsg({
          status:true,
          msg:error.message,
          type:'error'
        })
        return;
      }
      window.location.reload()
    }

    
  };

  return (
      <SignInContainer direction="column" sx={{ justifyContent: 'space-between', width:'500px' }} >
        
        <Card variant="outlined">
        
          <Typography component="h1" variant="h4" sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }} >
            {authstate}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }} >
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={emailError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            {/* <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" /> */}
            {/* <ForgotPassword open={open} handleClose={handleClose} /> */}
            <Button type="submit" fullWidth variant="contained" >
              {authstate}
            </Button>
            <Collapse in={Authmsg.status}><Alert severity={Authmsg.type}>{Authmsg.msg}</Alert></Collapse>
            {/* <Link component="button" type="button" onClick={handleClickOpen} variant="body2" sx={{ alignSelf: 'center' }} >
              Forgot your password?
            </Link> */}
          </Box>
          <Divider>or</Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* <Button fullWidth variant="outlined" onClick={() => alert('Sign in with Google')} startIcon={<GoogleIcon />} >
              Sign in with Google
            </Button>
            <Button fullWidth variant="outlined" onClick={() => alert('Sign in with Facebook')} startIcon={<FacebookIcon />} >
              Sign in with Facebook
            </Button> */}
            <Typography sx={{ textAlign: 'center' }}>
              Don&apos;t have an account?{' '}
              <Link href="#" onClick={(e) => {
                e.preventDefault();
                HandleAuthSet(authstate == 'Sign In' ? 'Sign Up':'Sign In')
              }} variant="body2" sx={{ alignSelf: 'center' }} >
                {authstate == 'Sign In' ? 'Sign up':'Sign in'}
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignInContainer>
  );
}