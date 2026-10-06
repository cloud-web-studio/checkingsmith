'use client';
import {
  Container,
  Grid,
  Typography, 
  Box, 
  Alert, 
  AlertTitle, 
  Paper, 
  Button, 
  Chip,
  Card,
  CardContent,
  Divider
} from '@mui/material';

export default function LineComponent() {

  return (
    <Container sx={{py:2}}>
        <Grid container sx={{justifyContent:'space-evenly'}} spacing={5} >
            <Grid size={2} sx={{ textAlign: { sm: 'center', md: 'center' } }} >
            <Typography component="p" variant="h1" sx={{ color: '#4ca6ff' }}>170+</Typography>
            <Typography component="h2" variant="body1" gutterBottom sx={{ color: 'text.primary', fontWeight:'bold' }}>Countries</Typography>
            </Grid>
            <Grid size={2} sx={{ textAlign: { sm: 'center', md: 'center' } }} >
            <Typography component="p" variant="h1" sx={{ color: '#4ca6ff' }}>99.92%</Typography>
            <Typography component="h2" variant="body1" gutterBottom sx={{ color: 'text.primary', fontWeight:'bold' }}>Uptime</Typography>
            </Grid>
            <Grid size={2} sx={{ textAlign: { sm: 'center', md: 'center' } }} >
            <Typography component="p" variant="h1" sx={{ color: '#4ca6ff' }}>1200+</Typography>
            <Typography component="h2" variant="body1" gutterBottom sx={{ color: 'text.primary', fontWeight:'bold' }}>Leagues</Typography>
            </Grid>
            <Grid size={2} sx={{ textAlign: { sm: 'center', md: 'center' } }} >
            <Typography component="p" variant="h1" sx={{ color: '#4ca6ff' }}>44ms</Typography>
            <Typography component="h2" variant="body1" gutterBottom sx={{ color: 'text.primary', fontWeight:'bold' }}>Latency</Typography>
            </Grid>
        </Grid>
    </Container>
  );
}