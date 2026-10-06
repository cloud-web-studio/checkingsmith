import LockOpenIcon from '@mui/icons-material/LockOpen';
import GppGoodIcon from '@mui/icons-material/GppGood';
import BoltIcon from '@mui/icons-material/Bolt';
import {
  Container,
  Grid,
  Typography, 
  Box, 
  Alert, 
  AlertTitle, 
  Paper, 
  Button, 
  Chip,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Avatar
} from '@mui/material';

    const benefits = [
      {
        title: 'Free Sports API Trial',
        description: 'Get instant access to real-time football matches using our free sports API developer tier.',
        icon: <LockOpenIcon />
      },
      {
        title: '24/7 Chat Support',
        description: 'Get round-the-clock technical help from real developers whenever you need assistance.',
        icon: <BoltIcon />
      },
      {
        title: 'Simple Sports API Integration',
        description: 'Connect your sports application seamlessly with our sports API widgets, easy-to-use code snippets and clear endpoints.',
        icon: <GppGoodIcon />
      },
      {
        title: 'Fast & Reliable Live Sports Data',
        description: 'Power your live sports application with a lightning-fast sports scores API that updates instantly.',
        icon: <BoltIcon />
      },
      {
        title: 'Full Sports API Documentation',
        description: 'Explore comprehensive our sports API guides detailing our extensive sports stats API, odds API and live feeds.',
        icon: <BoltIcon />
      },
      {
        title: 'Clean Sports Rest API Design',
        description: 'Query flexible sports API JSON endpoints designed specifically for fast sports rest API architectures.',
        icon: <BoltIcon />
      }
    ];

export default function DeveloperChoose() {

  return (
        <Container sx={{py:10}} >
          <Grid container sx={{justifyContent:'center'}} >
            <Box sx={{width:'65%', pb:3}}>
              <Typography variant='h2' sx={{textAlign:'center'}} gutterBottom>
                Why Developer Choose Our Sports API Data
              </Typography>
              <Typography variant='body1' sx={{textAlign:'center', color: 'text.secondary'}}>
                Building a sports app requires speed and precision. Our sports api delivers lightning-fast updates so your users never miss a play. Whether you need an automated sports scores api for live match trackers or a deep sports stats api for historical player analytics, our infrastructure handles it all seamlessly. Best of all, you can test our endpoints today using our free sports api sandbox tier.
              </Typography>
            </Box>
            <Box>
              <Grid container spacing={3} sx={{ justifyContent: 'space-between', width: '100%' }}>
                {benefits.map((benefit, index) => (
                  <Grid size={{ xs: 12, sm: 4, md: 4 }} key={index}>
                    <Card sx={{ height: '100%', borderRadius: 2, '&:hover': { transform: 'translateY(-4px)', borderColor: '#58a6ff'} }} >
                      <CardContent sx={{p:0}}>
                        <Box sx={{ width: 34, height: 34, bgcolor: 'rgba(88, 166, 255, 0.1)', borderRadius: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#58a6ff', mb: 1}}>
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
            </Box>
          </Grid>
        </Container>
  );
}
