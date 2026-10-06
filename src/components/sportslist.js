import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const SportsListcontent = [
  {
    img:'https://www.freepnglogos.com/uploads/football-player/football-player-play-football-download-clip-art-clip-art-24.png',
    name: 'Football API',
    underline:'',
    content:
      "Access a comprehensive free football API featuring global soccer data feeds across 1,200+ world leagues.",
  },
  {
    img:'https://www.freepnglogos.com/uploads/cricket-logo-png/custom-made-cricket-uniforms-cricket-uniforms-shirts-20.png',
    name: 'Cricket API',
    underline:'',
    content:
      "Access a comprehensive free cricket API for live score tracking, IPL data feeds, and international match analytics.",
  },
  {
    img:'https://www.freepnglogos.com/uploads/football-player/cartoon-football-player-clipart-clipart-best-3.png',
    name: 'NFL API',
    underline:'',
    content:
      "Access a high-performance free NFL API for real-time live scores, comprehensive fantasy football data, and team statistics.",
  }
];

const logoStyle = {
  width: '50px',
};

export default function SportsList() {

  return (
    <Container
      id="testimonials"
      sx={{ pt: { xs: 4, sm: 12 }, pb: { xs: 8, sm: 16 }, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 3, sm: 6 } }} >
      <Box sx={{ width: { sm: '100%', md: '100%' }, textAlign: { sm: 'left', md: 'center' } }} >
        <Typography component="h2" variant="h1" gutterBottom sx={{ color: 'text.primary' }}>
          Our Sports API built for each sport
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Each sport has its own optimized API with sport-specific endpoints, data models, and documentation.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {SportsListcontent.map((item, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: 'flex', boxShadow:'0 0 29px -3px hsl(210deg 100% 25% / 69%)', borderColor:'#333b4d' }}>
            <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }} >
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                {/* <CardHeader avatar={item.avatar} title={item.name} subheader={item.occupation} /> */}
                <CardHeader title={item.name} subheader={item.underline} />
                <img src={item.img} alt={item.name} style={logoStyle}/>
              </Box>
              <CardContent>
                <Typography variant="body1" gutterBottom sx={{ color: 'text.secondary' }} >
                  {item.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
