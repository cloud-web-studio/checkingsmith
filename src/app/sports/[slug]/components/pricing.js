import React from 'react';
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
  Chip
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function Pricing() {

      const HandleSubscription = async (sport_id, url) => {
        window.location = window.location.origin+'/sports/football-api'
        // window.location = window.location.origin+`/dashboard/sports-api/${url}-${sport_id}`
      }

       const OurPricing = [
         {
              "id": "3e99195d-93c5-4803-bd5f-9e6966cf97f6",
              "sport_id": 1,
              "name": "Free",
              "price": 0,
              "billing_period": "Monthly",
              "request_limit": 10,
              "rate_limit_window": "minute",
              "rate_limit_max": 3,
              "detail": "Perfect for development, testing, and side projects.",
              "features": [
                  "100 API Requests / Month",
                  "Access to All Sports & Endpoints",
                  "Clean JSON & Structured Data Format"
              ],
              "stripe_price_id": "price_1Ts60mGcpLd3uHcCcsQkAbEM",
              "created_at": "2026-07-08T15:27:09.441075+00:00",
              "btntext": "Get Free API Key",
              "popular": false,
              "sub": [],
          },
          {
              "id": "c31e5525-3c33-4bdf-94bc-17103de9f304",
              "sport_id": 1,
              "name": "Pro",
              "price": 16,
              "billing_period": "Monthly",
              "request_limit": 15,
              "rate_limit_window": "minute",
              "rate_limit_max": 5,
              "detail": "Built for scaling apps, active platforms, and production systems.",
              "features": [
                  "20000 API Requests / Month",
                  "Access to All Sports & Endpoints",
                  "Clean JSON & Structured Data Format",
                  "Claim 3-Day Free Trial – No Risk",
                  "100% full refund within 3 days if usage is under 1% quota."
              ],
              "stripe_price_id": "price_1TreeYGcpLd3uHcCKSJcGR9g",
              "created_at": "2026-07-08T15:27:58.480269+00:00",
              "btntext": "Buy Pro",
              "popular": true,
              "sub": [],
          },
           {
              "id": "ff6642f6-54ea-4434-9c1f-590b5cb8a4c4",
              "sport_id": 1,
              "name": "Ultra",
              "price": 36,
              "billing_period": "Monthly",
              "request_limit": 20,
              "rate_limit_window": "minute",
              "rate_limit_max": 7,
              "detail": "Designed for large-scale projects and high-concurrency systems.",
              "features": [
                  "50000 API Requests / Month",
                  "Access to All Sports & Endpoints",
                  "Clean JSON & Structured Data Format",
                  "Claim 3-Day Free Trial – No Risk",
                  "100% full refund within 3 days if usage is under 1% quota."
              ],
              "stripe_price_id": "price_1Tref7GcpLd3uHcC8wQ19e6K",
              "created_at": "2026-07-08T15:29:04.256867+00:00",
              "btntext": "Buy Ultra",
              "popular": false,
              "sub": [],
          }
      ]

  return (
        <Container id="pricing" sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 3, sm: 6 }, }} >
        <Typography component="h2" variant="h1" gutterBottom sx={{ color: 'text.primary' }}>
            Transparent Pricing for Football API Data
        </Typography>

        <Grid container spacing={3} alignItems="stretch">
            {OurPricing.map((plan, index) => (
                <Grid size={{ xs: 12, sm: 4, md: 4 }} key={index}>
                <Card 
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column', 
                    border: plan.popular ? '2px solid #58a6ff' : '1px solid #30363d',
                    borderRadius: 2,
                    boxShadow: plan.popular ? '0 0 20px rgba(88, 166, 255, 0.15)' : 'none',
                    position: 'relative',
                    transition: 'transform 0.2s ease, border-color 0.2s ease',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        borderColor: '#58a6ff',
                    }
                    }}
                >
                {plan.popular && <Chip label="MOST POPULAR" color="primary" size="small"sx={{ position: 'absolute', top: 10, right: 20, background: 'linear-gradient(-53deg, #4da6ff -22%, #504dff 100%)!important', color: 'white !important', fontWeight: 700, fontSize: '0.75rem'}}/>}

                <CardContent sx={{ p: 2, flexGrow: 1 }}>
                <Typography variant="h5" component="h2" fontWeight={700} sx={{ mb: 1 }}>{plan.name}</Typography>
                <Typography variant="body2" sx={{ color: '#8b949e', minHeight: 40, mb: 1 }}>{plan.detail}</Typography>
                <Box display="flex" alignItems="baseline" mb={1}>
                    <Typography variant="h3" component="span" fontWeight={800} >{plan.price}</Typography>
                    <Typography variant="subtitle1" component="span" sx={{ color: '#8b949e', ml: 1 }}>/ {plan.billing_period}</Typography>
                </Box>
                <List disablePadding>
                    {plan.features.map((feature, fIndex) => (
                    <ListItem key={fIndex} disableGutters sx={{ py: 0.1 }}>
                        <CheckCircleOutlineIcon sx={{color:'green !important', mr:1.5}} fontSize="small" />
                        <ListItemText primary={feature}/>
                    </ListItem>
                    ))}
                </List>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0, flexDirection:'column' }}>
                  <Button disabled={plan?.sub?.length} sx={{background:'linear-gradient(-53deg, #4da6ff -22%, #504dff 100%)!important'}} fullWidth size="large" variant={'outlined'} onClick={() => HandleSubscription(plan.sport_id)} > 
                    {plan.btntext}
                  </Button>
                  {plan.name !== 'Free' && 
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
