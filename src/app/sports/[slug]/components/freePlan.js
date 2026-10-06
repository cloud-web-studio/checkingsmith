import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  List,
  ListItem,
  ListItemText,
  CardActions
} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function FreePlan() {
  const HandleReq = async () => {
    // window.location = window.location.origin+`/dashboard/sports-api/${'football'}-${'1'}`;
    window.location = window.location.href;
  }
  return (
        <Container sx={{mb:5}}>
            <Box sx={{mb:3}}>
              <Typography component="h2" variant="h1" gutterBottom sx={{ color: 'text.primary' }}>
                  Start With Our Free Developer API Plan
              </Typography>
              <Typography component="h4" variant="h5" gutterBottom sx={{ color: 'text.primary', mt:-2 }} > No Credit Card. No Expiration.</Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Sports API Hub provides a 100% free Football API data plan designed specifically for developers. Enjoy 100 request API calls every single month with complete access to live endpoints, fixtures, and league data—zero fees, no credit card required.<br /> Build, prototype, and validate your applications with real-time data before scaling.
              </Typography>
            </Box>

            <Grid container spacing={3} sx={{ justifyContent: 'space-between', width: '100%' }}>
              <Grid size={{ xs: 12, sm: 12, md: 6 }} >
                  <Grid size={{ xs: 12, sm: 4, md: 12 }} sx={{mb:2}} >
                    <Card sx={{ height: '100%', borderRadius: 2, '&:hover': { transform: 'translateY(-4px)', borderColor: '#58a6ff'} }} >
                      <CardContent sx={{p:0.5}}>
                        <Stack direction="row" spacing={2} sx={{alignItems:'center', mb:2}}>
                          <LockOpenIcon sx={{fontSize:'20px', width: 40, height: 40, bgcolor: 'rgba(88, 166, 255, 0.1)', p:1, borderRadius: 1.5, color: '#58a6ff'}} />
                          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                            Free Requests Every Month
                          </Typography>
                        </Stack>
                        <Typography variant="body2" sx={{ color: '#8b949e', lineHeight: 1.6 }}>
                          Get a recurring allocation of 100 free API calls every single month. Build personal projects or test integration without worrying about sudden charges or forced trial expiries.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                   <Grid size={{ xs: 12, sm: 4, md: 12 }} sx={{mb:2}} >
                    <Card sx={{ height: '100%', borderRadius: 2, '&:hover': { transform: 'translateY(-4px)', borderColor: '#58a6ff'} }} >
                      <CardContent sx={{p:0.5}}>
                        <Stack direction="row" spacing={2} sx={{alignItems:'center', mb:2}}>
                          <LockOpenIcon sx={{fontSize:'20px', width: 40, height: 40, bgcolor: 'rgba(88, 166, 255, 0.1)', p:1, borderRadius: 1.5, color: '#58a6ff'}} />
                          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                            Unrestricted Access to All Football Endpoints
                          </Typography>
                        </Stack>
                        <Typography variant="body2" sx={{ color: '#8b949e', lineHeight: 1.6 }}>
                          We don't hide data behind paywalls. Your free tier grants access to full Football API schemas—including global leagues, live scores, match fixtures, standings, and player stats in clean JSON.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                   <Grid size={{ xs: 12, sm: 4, md: 12 }} sx={{mb:0}} >
                    <Card sx={{ height: '100%', borderRadius: 2, '&:hover': { transform: 'translateY(-4px)', borderColor: '#58a6ff'} }} >
                      <CardContent sx={{p:0.5}}>
                        <Stack direction="row" spacing={2} sx={{alignItems:'center', mb:2}}>
                          <LockOpenIcon sx={{fontSize:'20px', width: 40, height: 40, bgcolor: 'rgba(88, 166, 255, 0.1)', p:1, borderRadius: 1.5, color: '#58a6ff'}} />
                          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                            Zero Friction, Frictionless Upgrade
                          </Typography>
                        </Stack>
                        <Typography variant="body2" sx={{ color: '#8b949e', lineHeight: 1.6 }}>
                          Sign up in seconds without entering credit card details. When your app grows and you need higher request quotas, upgrade to a paid tier seamlessly right from your dashboard.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 6 }} >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', border: '2px solid #58a6ff', borderRadius: 2,
                    boxShadow: '0 0 20px rgba(88, 166, 255, 0.15)',
                    transition: 'transform 0.2s ease, border-color 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: '#58a6ff',
                    }
                  }}
                >
                  <CardContent sx={{ p: 2, flexGrow: 1 }}>
                    <Typography variant="h5" component="h2" fontWeight={700} sx={{ mb: 1 }}>
                      Free Football API Data — Developer Plan
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#8b949e', minHeight: 40, mb: 1 }}>
                      The smartest way to test a sports data feed is to build with it. Our Free Tier gives developers everything required to test latency, validate data accuracy, and build prototypes without spending a penny.
                    </Typography>
                    <Box display="flex" alignItems="baseline" mb={1}>
                      <Typography variant="h3" component="span" fontWeight={800} >0</Typography>
                      <Typography variant="subtitle1" component="span" sx={{ color: '#8b949e', ml: 1 }}>/ Month</Typography>
                    </Box>
                    <List disablePadding>
                        <ListItem disableGutters sx={{ py: 0.1 }}>
                            <CheckCircleOutlineIcon sx={{color:'green !important', mr:1.5}} fontSize="small" />
                          <ListItemText primary={'No credit card required to sign up'} />
                        </ListItem>
                        <ListItem disableGutters sx={{ py: 0.1 }}>
                            <CheckCircleOutlineIcon sx={{color:'green !important', mr:1.5}} fontSize="small" />
                          <ListItemText primary={'100 API requests per month (Renews monthly)'} />
                        </ListItem>
                        <ListItem disableGutters sx={{ py: 0.1 }}>
                            <CheckCircleOutlineIcon sx={{color:'green !important', mr:1.5}} fontSize="small" />
                          <ListItemText primary={'Full access to Football endpoints & all major leagues'} />
                        </ListItem>
                        <ListItem disableGutters sx={{ py: 0.1 }}>
                            <CheckCircleOutlineIcon sx={{color:'green !important', mr:1.5}} fontSize="small" />
                          <ListItemText primary={'Instant API key generation & REST JSON responses'} />
                        </ListItem>
                    </List>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button onClick={() => HandleReq()} sx={{background:'linear-gradient(-53deg, #4da6ff -22%, #504dff 100%)!important'}} fullWidth size="large" variant={'outlined'} >
                      Get Free API Key - $0, No Card
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
  );
}
