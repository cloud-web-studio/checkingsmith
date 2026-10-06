'use client'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Page() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Analytics
      </Typography>
      <Grid container spacing={2} columns={12} sx={{ mb: (theme) => theme.spacing(2) }} >
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          hello
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          hello
        </Grid>
      </Grid>
    </Box>
  );
}