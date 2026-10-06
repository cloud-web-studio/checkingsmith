'use client'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Tree from './components/Tree';
import LinearProgress from '@mui/material/LinearProgress';

export default function Page() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Dashboard
      </Typography>
      <Grid container spacing={2} columns={12} sx={{ mb: (theme) => theme.spacing(2) }} >

        <Grid container sx={{backgroundColor:'transparent'}} size={{ xs: 12, sm: 6, lg: 9 }}>

           <Grid sx={{backgroundColor:'transparent'}} size={{ xs: 12, sm: 6, lg: 4 }}>
              <Card variant="outlined" sx={{ height: '100%', flexGrow: 1, backgroundColor:'#0b1017 !important' }}>
                  <CardContent>
                  <Typography component="h2" variant="h5" gutterBottom> Total API Calls </Typography>
                  <Stack direction="column" sx={{ justifyContent: 'space-between', flexGrow: '1', gap: 1 }} >
                      <Stack sx={{ justifyContent: 'space-between' }}>
                          <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }} >
                              <LinearProgress sx={{backgroundColor:'#7080a0 !important', color:'#86eaa5 !important', width:'70%'}} variant="determinate" value={70} />
                              <Chip size="small" color="success" label="1% Used" />
                          </Stack>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}> 50 Request / 100 Request </Typography>
                      </Stack>
                  </Stack>
                  </CardContent>
              </Card>
            </Grid>

        </Grid>

        <Grid sx={{backgroundColor:'transparent'}} size={{ xs: 12, sm: 6, lg: 3 }}>
          <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
            {/* <Tree /> */}
          </Card>
        </Grid>

      </Grid>
    </Box>
  );
}