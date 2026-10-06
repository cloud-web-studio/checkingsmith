'use client'
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Link from 'next/link';
import { GetSportsList } from '@/actions/actions';

export default function Page() {

  const [sportslist, setsportslist] = React.useState([])
  
      const Handlereq = async () => {
          const result = await GetSportsList()
          setsportslist(result)
      }
  
      React.useEffect(() => {
          Handlereq()
      },[])
      
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Sports API
      </Typography>
      <Grid container spacing={2} columns={12} sx={{ mb: (theme) => theme.spacing(2) }} >

        <Grid container sx={{backgroundColor:'transparent'}} size={{ xs: 12, sm: 6, lg: 9 }}>
          {
            sportslist.map((val,key) => (
            <Grid key={key} sx={{backgroundColor:'transparent'}} size={{ xs: 12, sm: 6, lg: 3 }}>
              <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
                <CardContent>
                  <img src={val.img} style={{backgroundColor:'#494e55', borderRadius:'5px', width:'30%'}}></img>
                  <Link style={{textDecoration:'inherit !important',color:'inherit !important'}} href={`/dashboard/sports-api/${val.url}-${val.id}`}>
                    <Typography component="h2" variant="h5" gutterBottom> {val.name} </Typography>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
           ))
          }
        </Grid>

        <Grid sx={{backgroundColor:'transparent'}} size={{ xs: 12, sm: 6, lg: 3 }}>
          <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
            
          </Card>
        </Grid>

      </Grid>
    </Box>
  );
}