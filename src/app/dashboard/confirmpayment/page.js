'use client'
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
// import { GetStripeSession } from '@/actions/actions';
import { useSearchParams } from 'next/navigation';
import Alert from '@mui/material/Alert';



export default function Page() {
    // const searchParams = useSearchParams();
    // const getsession_id = searchParams.get('sessionid')

    // const HandleConfirmPayment = async () => {
    //     if(getsession_id){
    //         const result = await GetStripeSession(getsession_id)
    //         console.log(result)
    //         // if(result.error){

    //         // }
    //         window.location.href = result.data.redirect
    //     }
    // }

    // React.useEffect(() => {
    //     HandleConfirmPayment()
    // },[])

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      
      <Grid container spacing={2}>
            <Backdrop sx={{ color: '#fff', zIndex: 999999 }} open={true} >
                <CircularProgress sx={{mr:2}} color="inherit" />
                Please Wait.....
                {/* <Alert severity="error">There is something Wrong please try Again</Alert> */}
            </Backdrop>
      </Grid>
      
    </Box>
  );
}