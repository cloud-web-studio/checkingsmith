import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useColorScheme } from '@mui/material/styles';

const userTestimonials = [
  {
    name: 'Node js',
    url:"https://www.api-football.com/public/img/home1/nodejs.png",
  },
  {
    name: 'PHP',
    url:"https://www.api-football.com/public/img/home1/php.png",
  },
  {
    name: 'CURL',
    url:"https://www.api-football.com/public/img/home1/curl.png",
  },
  {
    name: 'Python',
    url:"https://www.api-football.com/public/img/home1/Python.png",
  },
];

const logoStyle = {
  width: '100%',
  margin: '-28px 0px'
};

export default function Developer() {
  const { mode, systemMode } = useColorScheme();


  return (
    <Container sx={{ pt: { xs: 2, sm: 10 }, pb: { xs: 2, sm: 10 } }} >
        <Grid container spacing={5} >
            <Grid container size={6} spacing={2} >
                {userTestimonials.map((val,key) => (
                    <Grid key={key} size={{ xs: 12, sm: 6, md: 6 }} sx={{ display: 'flex' }}>
                        <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }} >
                            <Box sx={{ display: 'grid', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <CardHeader title={val.name} />
                            <img src={val.url} alt={val.name} style={logoStyle}/>
                            </Box>
                            <CardContent>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Grid size={6} sx={{ textAlign: { sm: 'center', md: 'left' } }} >
                <Typography variant="body1" sx={{ color: '#4da6ff' }}> Code Libraries in Popular Languages.</Typography>
                <Typography component="h2" variant="h1" gutterBottom sx={{ color: 'text.primary' }}>
                  Developer Ecosystem & Sports API Integration
                </Typography>                
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Our Sports API Hub platform offers an interactive developer ecosystem & sports API integration hub engineered to streamline your entire software build cycle. We provide production-ready SDKs, native libraries across multiple modern frameworks, and an active developer community forum to solve integration bottlenecks rapidly. By combining low-latency RESTful architectures with persistent WebSocket streams, our ecosystem ensures that your technical team can move seamlessly from sandbox prototyping to global enterprise-grade deployment without refactoring core code.
                </Typography>
            </Grid>
        </Grid>
    </Container>
  );
}
