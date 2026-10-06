'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import visuallyHidden from '@mui/utils/visuallyHidden';
import { styled } from '@mui/material/styles';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AreaChartIcon from '@mui/icons-material/AreaChart';
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import CardActions from '@mui/material/CardActions';
import TerminalIcon from '@mui/icons-material/Terminal';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { 
  Alert, 
  Chip, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import GppGoodIcon from '@mui/icons-material/GppGood';
import BoltIcon from '@mui/icons-material/Bolt';
import SendIcon from '@mui/icons-material/Send';
import ContactUs from './contactUs';
import FreePlan from './freePlan';
import Pricing from './pricing';

export default function Single() {

  const [AuthStatus, setAuthStatus] = React.useState(null);
  const supabase = createClient()

  const HandleFirstTime = async () => {
    const { data } = await supabase.auth.getSession()
    setAuthStatus(data.session)
  }

  React.useEffect(() => {
    HandleFirstTime()
  },[])

  const benefits = [
    {
      title: '100% Full Access Across All Plans',
      description: 'Whether you are testing on our free tier or running enterprise workloads, you get complete access to every competition, endpoint, and live dataset.',
      icon: <LockOpenIcon />
    },
    {
      title: 'Risk-Free 3-Day Money-Back Guarantee',
      description: 'Try any paid tier with total peace of mind. If you are not completely satisfied and have used less than 1% of your plan\'s request quota within 3 days, we will give you a full refund—no questions asked.',
      icon: <GppGoodIcon />
    },
    {
      title: 'Zero Lock-In',
      description: 'Upgrade, downgrade, or cancel your subscription at any time directly from your developer dashboard.',
      icon: <BoltIcon />
    }
  ];

      const choose = [
      {
        title: 'Free Football API Access',
        small:'(No Expiry)',
        description: 'Start building immediately with a reliable football api free plan that never expires. Access real-time livescores api streams, league standings, and basic fixtures to test and scale your sports platform without financial risk.Option',
        icon: <LockOpenIcon />
      },
      {
        title: '1200+ Football Leagues Data',
        description: 'Access deep data coverage spanning global competitions, from elite divisions via our premier league api down to local lower leagues. Track historical statistics and current matchday details across the globe using a single football data api.',
        icon: <BoltIcon />
      },
      {
        title: '150+ Football Countries Data',
        description: 'Connect your platform to a truly global network with comprehensive api soccer coverage across continents. Query detailed match records and national league updates from over 150 countries through our unified infrastructure.',
        icon: <GppGoodIcon />
      },
      {
        title: 'Football Odds API Data',
        description: 'Power your platforms, betting tools, or prediction models with real-time pre-match and in-play values from our native football odds api. Access accurate bookmaker calculations and premium market trends instantly.',
        icon: <BoltIcon />
      },
      {
        title: '100% Full Refund Policy',
        description: 'Upgrade to any premium plan completely risk-free. If you are not satisfied with our football data api, we offer a 100% money-back guarantee as long as your account stays at or under 1% of its request quota.',
        icon: <BoltIcon />
      },
      {
        title: 'Easy Football API Documentation',
        description: 'Explore our highly intuitive API football documentation designed to get you up and running in minutes. Copy and paste ready-to-use code snippets to call complex football matches api endpoints effortlessly.',
        icon: <BoltIcon />
      }
    ];

      const FootballEnd = [
        {
          title: 'Football Livescores',
          description: 'Deliver real-time updates instantly using our high-frequency livescores api endpoint.',
          icon: <LockOpenIcon />
        },
        {
          title: 'Football Seasons',
          description: 'Access complete historical records and current data spanning multiple football seasons.',
          icon: <GppGoodIcon />
        },
        {
          title: 'Football Leagues (1200+)',
          description: 'Fetch deep tournament matrices from global tournaments via our premium premier league api.',
          icon: <BoltIcon />
        },
        {
          title: 'Football Odds Data',
          description: 'Power your platforms and betting apps with live market feeds from our football odds api.',
          icon: <BoltIcon />
        },
        {
          title: 'Football Countries',
          description: 'Query localized international league structures from over 150 soccer countries.',
          icon: <BoltIcon />
        },
        {
          title: 'Football Fixtures',
          description: 'Get fully updated calendar schedules for up-and-coming global football matches api feeds.',
          icon: <BoltIcon />
        },
        {
          title: 'Football Teams',
          description: 'Retrieve extensive profiles, stadium information, and club identities with our soccer api data.',
          icon: <BoltIcon />
        },
        {
          title: 'Players/Athletes Data',
          description: 'Access total squad sheets, profile info, and active market sheets for global clubs.',
          icon: <BoltIcon />
        },
        {
          title: 'Events/Matches Data',
          description: 'Track granular in-game instances like cards, goals, and substitutions using our apifootball engine.',
          icon: <BoltIcon />
        },
        {
          title: 'Football Players Statistics',
          description: 'Build comprehensive profiles using deep seasonal performance metrics from our football statistics api.',
          icon: <BoltIcon />
        },
        {
          title: 'Football Teams Statistics',
          description: 'Analyze precise goal counts, possession percentages, and form records using our football stats api.',
          icon: <BoltIcon />
        },
        {
          title: 'Football Match Statistics',
          description: 'Deliver a breakdown of historical performance records for single football matches api queries.',
          icon: <BoltIcon />
        },
        {
          title: 'Football Lineups',
          description: 'Get verified pre-match starting elevens and substitutes through our football live api framework.',
          icon: <BoltIcon />
        },
        {
          title: 'Football Standings',
          description: 'Display live updating league tables, form logs, and goal differences for your users.',
          icon: <BoltIcon />
        },
        {
          title: 'Football Rounds',
          description: 'Track stage numbers, brackets, and active match weeks with our clean soccer api structure.',
          icon: <BoltIcon />
        },
        {
          title: 'Football News Data',
          description: 'Keep your users engaged by serving trending articles via our native football news api feed.',
          icon: <BoltIcon />
        },
      ];
  

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
      <Container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', pt:22}} >
        <Grid container spacing={2}>
          <Grid size={7}>

        
            <Stack spacing={2} useFlexGap sx={{ alignItems: 'left', width: { xs: '100%', sm: '100%' } }} >
              <Typography variant="h1" sx={{ display: 'column', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', fontSize: 'clamp(3rem, 10vw, 2.5rem)' }} >
                High Performance<br />
                <Typography component="span" variant="h1" sx={{color:'#4da6ff', fontSize: 'clamp(3rem, 10vw, 2.5rem)'}}>
                  Free Football API
                </Typography>
                &nbsp;built for Developers
              </Typography>
              <Typography sx={{ textAlign: 'left', color: 'text.secondary', width: { sm: '100%', md: '80%' } }} >
                Get instant free access to a high speed free football API designed specifically for modern sports apps. Our API Football platform delivers 
                enterprise-grade sports data infrastructure. Power your application using a dedicated livescores api and soccer api data engine. This 
                robust api soccer framework guarantees sub-second updates for live matches across every major global tournament. Stop paying thousands 
                for restricted feeds—our football api free tier gives developers complete access to live match metrics, a detailed football statistics api, 
                and an integrated football news api feed.
              </Typography>
              
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} useFlexGap sx={{ pt: 2, width: { xs: '100%', sm: '350px' } }} >
                {AuthStatus == null ? 
                <Button component={Link} href="/" variant="contained" color="primary" size="small" sx={{ minWidth: 'fit-content' }} >
                  Try For Free ( No Card Needed )
                </Button> :
                <Button component={Link} href="/" variant="contained" color="primary" size="small" sx={{ minWidth: 'fit-content' }} >
                  Dashboard
                </Button>
                }
                {/* <Button component={Link} href="/sports/football-api/docs" color="primary" size="small" sx={{ minWidth: 'fit-content', backgroundColor:'#4da6ff', boxShadow:'rgb(0 168 255 / 16%) 0px 0px 0px 1px inset, rgb(0 168 255 / 14%) 0px 4px 24px, rgb(0 168 255 / 62%) 0px 12px 48px' }}>
                  Documentation
                </Button> */}
              </Stack>

            </Stack>
          </Grid>
          <Grid size={5}>
            {/* <StyledBox id="image" /> */}
           <img src="https://api-sports.io/public/img/logos/min-football.webp" alt="Description of the image" style={{width:'100%', marginTop:'-96px'}}/>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{py:10}}>
        <Box sx={{textAlign:'center', width:'56%', margin:'auto'}}>
          <Typography component="h2" variant="h1" gutterBottom sx={{ color: 'text.primary' }}>
            What makes Our Free Football API the top choice for developers?
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              We deliver highly structured JSON endpoints that combine an elite premier league API with complete football statistics API sets. 
              From real-time metrics to reliable football odds API feeds, developers get enterprise-grade performance completely free.
            </Typography>
        </Box>
        <Box>
          <Grid container spacing={3} sx={{ justifyContent: 'space-between', width: '100%', mt:3 }}>
            {choose.map((benefit, index) => (
              <Grid size={{ xs: 12, sm: 4, md: 4 }} key={index}>
                <Card sx={{ height: '100%', borderRadius: 2, '&:hover': { transform: 'translateY(-4px)', borderColor: '#58a6ff'} }} >
                  <CardContent sx={{p:0}}>
                    <Box sx={{ width: 34, height: 34, bgcolor: 'rgba(88, 166, 255, 0.1)', borderRadius: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#58a6ff', mb: 1}}>
                      {benefit.icon}
                    </Box>
                    <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                      {benefit.title} <Typography variant="body1" component='span' sx={{ fontSize:'15px', fontWeight:'bold', color:'#58a6ff' }}>{benefit.small}</Typography>
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#8b949e', lineHeight: 1.5 }}>
                      {benefit.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Container> <Divider sx={{ my: 5, opacity: 1, borderColor: 'divider', width:'100%' }} /></Container>
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
        <Grid container spacing={5} sx={{justifyContent:'center'}} >
          <Grid size={12} sx={{ textAlign: { sm: 'center', md: 'center' }, width:'80%' }} >
            <Typography component="h2" variant="h1" gutterBottom sx={{ color: 'text.primary' }}>
              The only Football API data endpoints your Soccer platform will ever need
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Our football api free tier provides a smart, developers-first structure of JSON endpoints to deliver rich soccer 
              data in the most convenient way possible.
            </Typography>
          </Grid>
          <Grid container size={12} spacing={2} >
            {FootballEnd.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index} sx={{ display: 'flex' }}>
                <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1, gap:'5px' }} >
                  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap:'5px' }}>
                    <TerminalIcon sx={{fontSize:25, color:'#00a8ff'}}  />
                    <CardHeader titleTypographyProps={{ component: 'span', sx: { fontSize: '17px', fontWeight:'bold' } }}  title={item.title} />
                  </Box>
                  <CardContent>
                    <Typography variant="body1" gutterBottom sx={{ color: 'text.secondary', fontSize:'14px' }} >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>

      <Container> <Divider sx={{ my: 10, opacity: 1, borderColor: 'divider', width:'100%' }} /></Container>

          <Container sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 3, sm: 6 }, }}>
              <Typography component="h2" variant="h1" gutterBottom sx={{ color: 'text.primary' }}>
                Why Our Pricing is Built for Developers:
              </Typography>
            <Grid container spacing={3} sx={{ justifyContent: 'space-between', width: '100%' }}>
              {benefits.map((benefit, index) => (
                <Grid size={{ xs: 12, sm: 4, md: 4 }} key={index}>
                  <Card sx={{ height: '100%', borderRadius: 2, '&:hover': { transform: 'translateY(-4px)', borderColor: '#58a6ff'} }} >
                    <CardContent sx={{p:2}}>
                      <Box sx={{ width: 48, height: 48, bgcolor: 'rgba(88, 166, 255, 0.1)', borderRadius: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#58a6ff', mb: 2}}>
                        {benefit.icon}
                      </Box>
                      <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                        {benefit.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#8b949e', lineHeight: 1.6 }}>
                        {benefit.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>

          <Container id="pricing"> <Divider sx={{ my: 10, opacity: 1, borderColor: 'divider', width:'100%' }} /></Container>
          <Pricing />
          <Container id="freeplan" > <Divider sx={{ my: 10, opacity: 1, borderColor: 'divider', width:'100%' }} /></Container>
          <FreePlan />
          {/* <Container id="contactus" > <Divider sx={{ my: 10, opacity: 1, borderColor: 'divider', width:'100%' }} /></Container> */}
          {/* <ContactUs /> */}
          <Container> <Divider sx={{ my: 10, opacity: 1, borderColor: 'divider', width:'100%' }} /></Container>
          <Container>
            <Grid container sx={{ alignItems:'center' }}>
              <Grid size={{ xs: 12, sm: 4, md: 6 }}>
                <Typography component="h2" variant="h2" gutterBottom sx={{ color: 'text.primary' }}>
                  Start Building Your Football App Today for Free
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Experience true developer-first pricing. Test live scores, global league standings, and fixture endpoints with zero risk. Plug in our lightweight JSON data feed today—no credit card, no auto-billing, no hassle.
                </Typography>
              </Grid>
              <Grid container size={{ xs: 12, sm: 4, md: 6 }} sx={{justifyContent:'end', gap:'20px'}}>
                <Button onClick={() => { document.getElementById('freeplan').scrollIntoView({ behavior: 'smooth' }) }} fullWidth size="large" variant={'contained'} sx={{ py: 1, borderRadius: 1.5, fontWeight: 700, width:'50%' }} >
                    Start Free Tier – No Card Needed
                </Button>
                {/* <Button onClick={() => { document.getElementById('contactus').scrollIntoView({ behavior: 'smooth' }) }} fullWidth size="large" variant={'outlined'} sx={{ py: 1, borderRadius: 1.5, fontWeight: 700, width:'50%' }}>
                    Talk to Us
                </Button> */}
              </Grid>
            </Grid>
          </Container>
          <Divider sx={{ my: 10, opacity: 1, borderColor: 'divider', width:'100%' }} />


    </Box>
  );
}
