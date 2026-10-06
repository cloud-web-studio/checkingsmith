'use client'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { CreateCheckoutLink } from '@/actions/actions';

export default function Pricing({HandleSubmit, plans}) {

  const HandleSubscription = async (id, sport_id, price_id) => {
    const site_url = window.location.href;
    const result = await CreateCheckoutLink(site_url, price_id)
    if(result.error){
      console.log(result.error)
      return;
    }
    window.location = result.url
  }

  return (
    <Container id="pricing"
      sx={{ pt: { xs: 4, sm: 12 }, pb: { xs: 8, sm: 16 }, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 3, sm: 6 }, }} >
      <Box sx={{ width: { sm: '100%', md: '60%' }, textAlign: { sm: 'left', md: 'center' } }}>
        <Typography component="h2" variant="h4" gutterBottom sx={{ color: 'text.primary' }} >
          Pricing
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Quickly build an effective pricing table for your potential customers with
          this layout. <br />
          It&apos;s built with default Material UI components with little
          customization.
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }} >
        {plans.map((tier) => (
          <Grid size={{ xs: 12, sm: 1, md: 3 }} key={tier.name} >
            <Card sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 4 }} >
              <CardContent>
                <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }} >
                  <Typography component="h3" variant="h6">{tier.name}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'baseline' }} >
                  <Typography component="h3" variant="h2">${tier.price}</Typography>
                  <Typography component="h3" variant="h6">&nbsp; per month</Typography>
                </Box>
                <Divider sx={{ my: 2, opacity: 0.8, borderColor: 'divider' }} />
              </CardContent>
              <CardActions>
                <Button disabled={tier.subscriptions.length} fullWidth variant='contained' color='secondary' onClick={() => HandleSubscription(tier.id, tier.sport_id, tier.price_id)} >
                  {tier.name}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
