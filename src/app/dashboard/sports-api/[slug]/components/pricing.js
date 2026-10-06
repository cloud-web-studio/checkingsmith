'use client'
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  List,
  ListItem,
  ListItemText,
  CardActions,
  Chip,
  Divider
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { CreateCheckoutLink } from '@/actions/actions';

export default function Pricing({plans, activePlan}) {
  console.log(plans)
  const HandleSubscription = async (plan_id, price_id, sport_id) => {
    // console.log(activePlan)
    // return;
    const site_url ={
        host:window.location.origin,
        url:window.location.href
    };
    const result = await CreateCheckoutLink(site_url, plan_id, price_id, sport_id)
    if(result.error){
      console.log(result.msg)
      return;
    }
    window.location = result.url
  }

  return (
    <Container id="pricing"
      sx={{ pt: { xs: 4, sm: 12 }, pb: { xs: 8, sm: 16 }, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 3, sm: 6 }, }} >
      <Box sx={{ width: { sm: '100%', md: '60%' }, textAlign: { sm: 'left', md: 'center' } }}>
        <Typography component="h2" variant="h2" gutterBottom sx={{ color: 'text.primary' }} >
          Transparent Pricing for Football API Data
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="stretch" >
        {plans.map((tier) => (
          <Grid size={{ xs: 12, sm: 4, md: 4 }} key={tier.name}>
            <Card 
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', 
                border: tier.popular ? '2px solid #58a6ff' : '1px solid #30363d',
                borderRadius: 2,
                boxShadow: tier.popular ? '0 0 20px rgba(88, 166, 255, 0.15)' : 'none',
                position: 'relative',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: '#58a6ff',
                }
                }}
            >
            {tier.popular && <Chip label="MOST POPULAR" color="primary" size="small"sx={{ position: 'absolute', top: 10, right: 20, background: 'linear-gradient(-53deg, #4da6ff -22%, #504dff 100%)!important', color: 'white !important', fontWeight: 700, fontSize: '0.75rem'}}/>}

            <CardContent sx={{ p: 2, flexGrow: 1 }}>
            <Typography variant="h5" component="h2" fontWeight={700} sx={{ mb: 1 }}>{tier.name}</Typography>
            <Typography variant="body2" sx={{ color: '#8b949e', minHeight: 40, mb: 1 }}>{tier.detail}</Typography>
            <Box display="flex" alignItems="baseline" mb={1}>
                <Typography variant="h3" component="span" fontWeight={800} >${tier.price}</Typography>
                <Typography variant="subtitle1" component="span" sx={{ color: '#8b949e', ml: 1 }}>/ {tier.billing_period}</Typography>
            </Box>
            <List disablePadding>
                {tier.features && tier.features.map((feature, fIndex) => (
                <ListItem key={fIndex} disableGutters sx={{ py: 0.1 }}>
                    <CheckCircleOutlineIcon sx={{color:'green !important', mr:1.5}} fontSize="small" />
                    <ListItemText primary={feature}/>
                </ListItem>
                ))}
            </List>
            </CardContent>
            <CardActions sx={{ p: 2, pt: 0, flexDirection:'column' }}>
              <Button disabled={tier.sub.length} sx={{background:'linear-gradient(-53deg, #4da6ff -22%, #504dff 100%)!important'}} fullWidth size="large" variant={'outlined'} onClick={() => HandleSubscription(tier.id, tier.stripe_price_id, tier.sport_id)} > {tier.btntext}</Button>
              {tier.name !== 'Free' && 
              <Typography variant="body2" sx={{ color: '#8b949e', minHeight: 40, mt: 1, textAlign:'center' }}>
                Try risk-free. Full refund within 72 hours (under 1% quota)
              </Typography>}
            </CardActions>
        </Card>
        </Grid>
        ))}
      </Grid>
    </Container>
  );
}