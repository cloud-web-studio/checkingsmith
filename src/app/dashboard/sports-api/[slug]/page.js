'use client'
import React from 'react';
import { use } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Pricing from './components/pricing';
import KeyIcon from '@mui/icons-material/Key';
import Divider from '@mui/material/Divider';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import AreaChartIcon from '@mui/icons-material/AreaChart';
import { createClient } from '@/utils/supabase/client';
import { SingleSportData } from '@/actions/actions';



export default function Page({ params }) {

    const { slug } = use(params)
    const supabase = createClient()
    const [sportvalue, setsportvalue] = React.useState({
        sub:{
            status:false,
            name:'', 
            apikey:'',
            count:0, 
            mlimit:0,
            reqper:0
        },
        plansList:[]
    })

    const Handlereq = async () => {
        const { data: { session:{user:{id:user_id}} } } = await supabase.auth.getSession()
        const result = await SingleSportData(user_id, slug.split('-')[1])
        console.log(result)
        setsportvalue(result)
    }

    React.useEffect(() => {
        Handlereq()
    },[])

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      
      <Grid container spacing={2}>
            <Grid size={8}>
                {/* <img style={{width:'100%', height:'200px', borderRadius:10, objectFit:'cover'}} 
                src='https://static.vecteezy.com/system/resources/thumbnails/017/046/997/small/cheering-banner-football-vector.jpg'></img> */}
                <Stack className='custombanner' >
                    <Typography component="h2" variant="h4" sx={{fontSize:50 }} > {slug.split('-')[0].toUpperCase()} </Typography>
                    <Typography variant="h5" >The 2026 soccer schedule for all major soccer leagues on ESPN (IN). Includes kick off times and TV listings for Premier League, MLS, LaLiga and more.</Typography>
                </Stack>
            </Grid>
            <Grid size={4}>
                <img style={{width:'100%', height:'200px', borderRadius:10, objectFit:'cover'}} 
                src='https://img.magnific.com/premium-vector/soccer-template-design-football-banner-sport-layout-design-red-theme-vector-illustration-abstract_42237-1405.jpg'></img>
            </Grid>
      </Grid>
      {/* <Typography variant="h4" sx={{ my: 2 }}>{slug.split('-')[0].toUpperCase()}</Typography> */}
      <Grid spacing={2} container sx={{backgroundColor:'transparent', mt:1}} size={{ xs: 12, sm: 6, lg: 9 }}>
        
        <Grid sx={{backgroundColor:'transparent'}} size={{ xs: 12, sm: 6, lg: 4 }}>
                <Card variant="outlined" sx={{ height: '100%', flexGrow: 1, backgroundColor:'#1b2937ab !important' }}>
                    <CardContent>
                        <Stack direction="row" sx={{ alignItems: 'center', justifyContent:'space-between', mb:2 }} >
                            <Typography component="h2" variant="h4" sx={{fontSize:20 }} > {sportvalue.sub.name} Plan </Typography>
                            <CardMembershipIcon color="success" sx={{backgroundColor:'#16b1ff29', padding:'5px', fontSize:'36px', borderRadius:'5px', color:'#16b1ff'}} />
                        </Stack>
                        {sportvalue.sub.status &&
                        <Stack direction="row" sx={{ alignItems: 'center', justifyContent:'space-between', mb:1 }} >
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>100 Requests per day</Typography>
                            <Chip size="small" color="success" label="Active" />
                        </Stack> }
                        <Divider sx={{my:1}} />
                        <Stack direction="row" sx={{ alignItems: 'center', justifyContent:'space-between' }} >
                            <Typography variant="h4" sx={{ mr:1, fontSize:15 }}>API-KEY: </Typography>
                            <Chip icon={<KeyIcon sx={{fontSize:'18px !important'}} />} label={ sportvalue.sub.apikey } />
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
            {sportvalue.sub.status && 
            <>
            <Grid sx={{backgroundColor:'transparent'}} size={{ xs: 12, sm: 6, lg: 4 }}>
                <Card variant="outlined" sx={{ height: '100%', flexGrow: 1, backgroundColor:'#1b2937ab !important' }}>
                    <CardContent>
                        <Stack direction="row" sx={{ alignItems: 'center', justifyContent:'space-between', mb:2 }} >
                            <Typography component="h2" variant="h4" sx={{fontSize:20 }} > Requests per day </Typography>
                            <SignalCellularAltIcon color="success" sx={{backgroundColor:'#042f04', padding:'5px', fontSize:'36px', borderRadius:'5px', color:'#68eaa5'}} />
                        </Stack>
                        <Divider sx={{mb:3}} />
                        <LinearProgress sx={{backgroundColor:'#7080a0 !important', color:'#86eaa5 !important', width:'100%'}} variant="determinate" value={50} />
                        <Stack direction="row" sx={{ alignItems: 'center', justifyContent:'end', mt:2 }} >
                        <Typography variant="caption" sx={{ color: 'text.secondary', textAlign:'right', display:'block'  }}>
                            {sportvalue.sub.count} Request / {sportvalue.sub.mlimit} Request
                        </Typography>
                        <Chip size="small" color="success" label={sportvalue.sub.reqper + "% Used"} /> 
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
            
            <Grid sx={{backgroundColor:'transparent'}} size={{ xs: 12, sm: 6, lg: 4 }}>
                <Card variant="outlined" sx={{ height: '100%', flexGrow: 1, backgroundColor:'#1b2937ab !important' }}>
                    <CardContent>
                        <Stack direction="row" sx={{ alignItems: 'center', justifyContent:'space-between', mb:2 }} >
                            <Typography component="h2" variant="h4" sx={{fontSize:20 }} > Remaining Requests </Typography>
                            <AreaChartIcon color="success" sx={{backgroundColor:'#042f04', padding:'5px', fontSize:'36px', borderRadius:'5px', color:'#68eaa5'}} />
                        </Stack>
                        <Divider sx={{mb:3}} />
                        <LinearProgress sx={{backgroundColor:'#7080a0 !important', color:'#86eaa5 !important', width:'100%'}} variant="determinate" value={50} />
                        <Stack direction="row" sx={{ alignItems: 'center', justifyContent:'end', mt:2 }} >
                        <Typography variant="caption" sx={{ color: 'text.secondary', textAlign:'right', display:'block'  }}>
                            {sportvalue.sub.count} Request / {sportvalue.sub.mlimit} Request
                        </Typography>
                        <Chip size="small" color="success" label="1% Used" /> 
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
            </>
            }


      </Grid>
      <Pricing plans={sportvalue.plansList} activePlan={sportvalue.sub} />
    </Box>
  );
}