import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import AreaChartIcon from '@mui/icons-material/AreaChart';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import TableChartIcon from '@mui/icons-material/TableChart';

const sportsFeatured = [
  {
    icon: <LiveTvIcon sx={{fontSize:50, color:'#00a8ff', backgroundColor:'rgba(88, 166, 255, 0.1)',p:1.2, borderRadius:'5px'}}  />,
    name: 'Live Sports Coverage',
    content:
      "Get real-time live sports coverage, instant score updates, and deep player statistics for every major league.",
  },
  {
    icon: <BookmarksIcon sx={{fontSize:50, color:'#00a8ff', backgroundColor:'rgba(88, 166, 255, 0.1)',p:1.2, borderRadius:'5px'}} />,
    name: 'Pre-Match & Live Sports Odds',
    content:
      "Integrate a high-speed sports betting odds API for real-time pre-match lines and live in-play betting markets.",
  },
  {
    icon: <StackedLineChartIcon sx={{fontSize:50, color:'#00a8ff', backgroundColor:'rgba(88, 166, 255, 0.1)',p:1.2, borderRadius:'5px'}}  />,
    name: 'Real Time Sports Data',
    content:
      "Power your platform with a premium live sports data feed for instant scores, real-time match tracking, and analytical updates.",
  },
  {
    icon: <AreaChartIcon sx={{fontSize:50, color:'#00a8ff', backgroundColor:'rgba(88, 166, 255, 0.1)',p:1.2, borderRadius:'5px'}} />,
    name: 'Advanced Sports Statistics Data',
    content:
      "Our platform provides granular, historical, and real-time advanced sports statistics data to give your application a competitive edge.",
  },
  {
    icon: <TableChartIcon sx={{fontSize:50, color:'#00a8ff', backgroundColor:'rgba(88, 166, 255, 0.1)',p:1.2, borderRadius:'5px'}}  />,
    name: 'Historical Sports Records',
    content:
      "Our comprehensive sports data API provides deep access to global historical sports records, allowing your application to query archived data dating back decades.",
  },
  {
    icon: <QueryStatsIcon sx={{fontSize:50, color:'#00a8ff', backgroundColor:'rgba(88, 166, 255, 0.1)',p:1.2, borderRadius:'5px'}}  />,
    name: 'Sports Analytics Data',
    content:
      "Our platform delivers high-fidelity sports analytics data designed to fuel advanced software applications and predictive algorithms.",
  },
  {
    icon: <PermMediaIcon sx={{fontSize:50, color:'#00a8ff', backgroundColor:'rgba(88, 166, 255, 0.1)',p:1.2, borderRadius:'5px'}}  />,
    name: 'Sports Multimedia Content Data',
    content:
      "Enhance your application interface with an automated sports media API delivering real-time team logos and player images.",
  },
  {
    icon: <QueryStatsIcon sx={{fontSize:50, color:'#00a8ff', backgroundColor:'rgba(88, 166, 255, 0.1)',p:1.2, borderRadius:'5px'}}  />,
    name: 'Complete Sports Data API Guide',
    content:
      "Learn how to build high-performance applications with our ultimate sports API documentation and step-by-step developer integration tutorial.",
  },
  {
    icon: <CalendarMonthIcon sx={{fontSize:50, color:'#00a8ff', backgroundColor:'rgba(88, 166, 255, 0.1)',p:1.2, borderRadius:'5px'}}  />,
    name: '24/7 Chat Support',
    content:
      "Ensure maximum uptime for your platform with a premium reliable sports API backed by expert 24/7 sports API Hub technical support.",
  },
];

export default function KeyFeatures() {

  return (
    <Container sx={{ pt: { xs: 2, sm: 10 }, pb: { xs: 2, sm: 10 } }} >
      <Grid container spacing={5} >
        <Grid size={12} sx={{ textAlign: { sm: 'center', md: 'center' } }} >
          <Typography component="h2" variant="h1" gutterBottom sx={{ color: 'text.primary' }}>
            A full featured Sports API Hub stack built
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Engineered for Speed. Built for Reliability.
          </Typography>
        </Grid>
        <Grid container size={12} spacing={2} >
          {sportsFeatured.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: 'flex' }}>
              <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }} >
                <Box sx={{ display: 'grid', flexDirection: 'row', justifyContent: 'space-between' }}>
                  {item.icon}
                  <CardHeader sx={{mt:1}} title={item.name} />
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
      </Grid>
    </Container>
  );
}
