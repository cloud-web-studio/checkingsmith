import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Demo from '../components/json';
import Divider, { dividerClasses } from '@mui/material/Divider';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { createClient } from '@/utils/supabase/client';

export default async function Page({ params, searchParams }) {
  const supabase = createClient()
    const { docsslug } = await params;
    // const sParams = await searchParams;
    // const queryString = new URLSearchParams(sParams).toString();
    const {data: endpoints, error} = await supabase.from('endurl').select('*').eq('url',docsslug)
    const customquerystrings = endpoints[0].params.split('?')[1] !== undefined ? endpoints[0].params.split('?')[1]?.split('&') : []
    console.log(customquerystrings)
    // const fullPath = queryString ? `${docsslug}?${queryString}` : docsslug;
    const fullPath = endpoints[0].params;
    var jsonval = {}
    const url = 'http://45.151.122.115/api/v1/' + fullPath
    const options = {
      method: 'GET'
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result);
      jsonval = result
    } catch (error) {
      console.error(error);
    }

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Grid container spacing={2}>
      <Grid size={{md:7}}>
            <Box sx={{mb:0}}>
              <Typography variant="h2" gutterBottom >{endpoints[0]?.label.toUpperCase()}</Typography>
              <Typography variant="body1" >{endpoints[0]?.desc}</Typography>
            </Box>
            <Divider sx={{my:2, opacity:0.4}} />
            <Box sx={{mb:0}}>
              <Typography variant="h4" sx={{ mb: 0 }}>Header Parameters</Typography>
              <Stack direction="row" spacing={2} sx={{alignItems: "center", height:'38px'}}>
                <Box sx={{display:'flex', alignItems:'center'}}><ArrowRightAltIcon sx={{fontSize:20, mr:1, ml:'-3px'}} />apikey</Box>
                <Box>Your API Key</Box>
              </Stack>
            </Box>
            <Divider sx={{my:2, opacity:0.4}} />
            <Box sx={{mb:0}}>
              <Typography variant="h4" sx={{ mb: 0 }}>Query Parameters</Typography>
              <Stack className='rocking' direction="column" spacing={0} >
                { customquerystrings.map((val,ind) => (
                    <Stack key={ind} direction="row" spacing={2} sx={{alignItems: "center"}}>
                      <Box sx={{display:'flex', alignItems:'center'}}><ArrowRightAltIcon sx={{fontSize:20, mr:1, ml:'-3px'}} />{val.split('=')[0]}</Box>
                      <Box>{val.split('=')[1]}</Box>
                    </Stack>
                  ))}
              </Stack>
            </Box>
            <Divider sx={{my:2, opacity:0.4}} />
            <Box sx={{mb:0}}>
              <Typography variant="h4" gutterBottom >Example Request URL</Typography>
              <Paper elevation={10} sx={{py:1, px:2, display:'flex'}} >
                <Chip label="Get" color='white' sx={{backgroundColor:'#15ae15 !important', mr:1}} />
                <Typography  variant="body2">http://api.sportsapihub.com/api/{fullPath}</Typography>
              </Paper>
            </Box>
          </Grid>

          <Grid size={{md:5}}>
            <Typography variant="h4" gutterBottom >EndPoint</Typography>
            <Paper elevation={10} sx={{py:1, px:2, display:'flex'}} >
              <Chip label="Get" color='white' sx={{backgroundColor:'#15ae15 !important', mr:1}} />
              <Typography variant="body2">/api/{docsslug}</Typography>
            </Paper>
            <Divider sx={{my:2, opacity:0.4}} />
            <Typography variant="h4" sx={{bgcolor:'#000000bf !important', color:'white', borderRadius:'5px 5px 0px 0px', py:1, px:1}}>Samples Response</Typography>
            <Demo jsonval={jsonval} makest={{width:'100%',height:'500px', overflowX:'auto', padding:'20px', borderRadius:'0px 0px 5px 5px'}} />
          </Grid>

        </Grid>

        {/* <Box>
          <Typography variant="h4" sx={{ mb: 1 }}>Response</Typography>
          <Accordion sx={{mb:1, backgroundColor:'transparent !important', border:'unset !important'}} >
            <AccordionSummary sx={{backgroundColor:'#41a64b54 !important', color:'#1d8127 !important'}} expandIcon={<ExpandMoreIcon sx={{color:'#1d8127 !important'}} />} aria-controls={`12-panel1-content`} id={`12-panel1-header`} >
              <Typography sx={{fontWeight:'bold'}} component="span">200 OK</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Demo jsonval={jsonval} makest={{width:'100%', overflowX:'auto', padding:'0px', backgroundColor:'transparent'}} />
            </AccordionDetails>
          </Accordion>
        </Box> */}
    </Box>
  );
}