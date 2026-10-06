'use client'
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '../components/table';
import { GetSubscription } from '@/actions/actions';

export default function Page() {
  const [subdata, setsubdata] = React.useState([])
  const HandleRequest = async () => {
    const result = await GetSubscription()
    setsubdata(result)
  }
  React.useEffect(() => {
    HandleRequest()
  },[])

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Subsciptions
      </Typography>
      <Grid container spacing={2} columns={12} sx={{ mb: (theme) => theme.spacing(2) }} >
        <Table subdata={subdata} />
      </Grid>
    </Box>
  );
}