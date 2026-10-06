'use client'
import * as React from 'react';
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
import KeyIcon from '@mui/icons-material/Key';
import SecurityIcon from '@mui/icons-material/Security';
import CodeIcon from '@mui/icons-material/Code';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';


export default function Page(props) {

  const codeExamples = {
  curl: `curl --location 'https://api.sportsapihub.com/api/v1/football-seasons' \\
--header 'apikey: sports_api_hub_3bb3c292c5ee1fa4'`,
  javascript: `const options = {
  method: 'GET',
  headers: {
    'apikey': 'sports_api_hub_3bb3c292c5ee1fa4'
  }
};

fetch('https://api.sportsapihub.com/api/v1/football-seasons', options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error('Error:', err));`,
  nodejs: `const axios = require('axios');

const config = {
  method: 'get',
  url: 'https://api.sportsapihub.com/api/v1/football-seasons',
  headers: { 
    'apikey': 'sports_api_hub_3bb3c292c5ee1fa4'
  }
};

axios(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });`
};

const jsonResponse = `{
  "status": 200,
  "success": true,
  "message": "Seasons retrieved successfully",
  "data": [
    {
      "season_id": 2026,
      "name": "2025/2026",
      "is_current": true
    }
  ]
}`;
 
  return (
      <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
        <Box sx={{display:'flex', flexDirection:'column', gap:'10px', mb:0}}>
          <Typography variant="h2">Football API Documentation</Typography>
          <Typography variant="body1" >
            Welcome to the Sports API Hub Football API Documentation. This guide provides all the technical details, endpoint specifications, and code examples required to integrate real-time football data into your applications.
           <br /><br /> Whether you are building live score platforms, fantasy football leagues, or match analytics tools, our REST endpoints deliver structured, ultra-low latency JSON data feeds.
          </Typography>
        </Box>
        <Divider sx={{my:3, opacity:0.4}} />
        <Box sx={{display:'flex', flexDirection:'column', gap:'10px', mb:0}}>
          <Typography variant="h4"><RocketLaunchIcon sx={{ color: '#1976d2' }} /> Getting Started: 3-Step Quickstart</Typography>
          <Typography variant="body1">
            Follow these three steps to make your first live API request in under two minutes:
          </Typography>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 12, md: 4 }}>
              <Card sx={{ bgcolor: '#161b22', border: '1px solid #30363d', height: '100%', borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                    1. Create Account
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#8b949e', lineHeight: 1.6 }}>
                    Register on Sports API Hub and select a subscription plan (including our $0 Free Tier with 100 requests/month).
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 4 }}>
              <Card sx={{ bgcolor: '#161b22', border: '1px solid #30363d', height: '100%', borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                    2. Access Dashboard
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#8b949e', lineHeight: 1.6 }}>
                    Log into your <strong>Developer Dashboard</strong> to view active subscription plans and usage metrics.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 4 }}>
              <Card sx={{ bgcolor: '#161b22', border: '1px solid #30363d', height: '100%', borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                    3. Retrieve API Key
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#8b949e', lineHeight: 1.6 }}>
                    Copy your unique secret key from the <strong>API Key</strong> section inside your API dashboard.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Divider sx={{my:3, opacity:0.4}} />
        <Box sx={{ mb: 0 }}>
          <Typography variant="h4" component="h2" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <KeyIcon /> Authentication & Header Format
          </Typography>
          <Typography variant="body1" sx={{mb:3}} >
            Sports API Hub uses header-based API key authentication. Every HTTP request sent to our servers must include your API key inside the request header named <code>apikey</code>.
          </Typography>
          <Paper sx={{ bgcolor: '#161b22', border: '1px solid #30363d', p: 2, borderRadius: 2, mb: 3 }}>
            <Typography variant="caption" sx={{ color: '#8b949e', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>
              Header Key & Value Format
            </Typography>
            <Box sx={{ mt: 1, p: 1.5, bgcolor: '#0d1117', borderRadius: 1, border: '1px solid #21262d', fontFamily: 'monospace', color: '#79c0ff' }}>
              apikey:sports_api_hub.....
            </Box>
          </Paper>
          <Alert severity="warning" icon={<SecurityIcon />} sx={{ bgcolor:'white !important', fontWeight:'bold', color: '#d29922', border: '1px solid rgba(187,128,9,0.3)', borderRadius: 2 }}>
            <AlertTitle sx={{ fontWeight: 700 }}>Security Precaution</AlertTitle>
            Keep your API key strictly confidential. Do not commit keys to public GitHub repositories or expose them in client-side production JavaScript.
          </Alert>
        </Box>
        <Divider sx={{my:3, opacity:0.4}} />
        <Box sx={{display:'flex', flexDirection:'column', gap:'10px', mb:0}}>
          <Typography variant="h4">Football API Base URL</Typography>
          <Typography variant="body1" >
            All API requests must be made over secure HTTPS:
          </Typography>
          <Paper sx={{ bgcolor: '#161b22', border: '1px solid #30363d', p: 2, borderRadius: 2, mb: 3 }}>
            <Typography variant="caption" sx={{ color: '#8b949e', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>
              Base HTTPS Endpoint:
            </Typography>
            <Box sx={{ mt: 1, p: 1.5, bgcolor: '#0d1117', borderRadius: 1, border: '1px solid #21262d', fontFamily: 'monospace', color: '#79c0ff' }}>
              <Chip label="GET" sx={{ bgcolor: 'green !important', mr:1 }} />
              https://api.sportsapihub.com/api/v1
            </Box>
          </Paper>
        </Box>
        <Divider sx={{my:3, opacity:0.4}} />
        <Box sx={{display:'flex', flexDirection:'column', gap:'10px', mb:0}}>
          <Typography variant="h4">Football API Code Examples</Typography>
          <Paper sx={{ bgcolor: '#0d1117', border: '1px solid #30363d', p: 2.5, borderRadius: 2, overflowX: 'auto', mb: 3 }}>
            <pre style={{ margin: 0, fontFamily: 'monospace', color: '#79c0ff', fontSize: '0.85rem' }}>
              <code>{codeExamples.curl}</code>
            </pre>
          </Paper>
        </Box>
        <Divider sx={{my:3, opacity:0.4}} />
        <Box sx={{display:'flex', flexDirection:'column', gap:'10px', mb:0}}>
          <Typography variant="h4">Football API Response Format</Typography>
          <Typography variant="body1" >
            All API responses are delivered in standard JSON format. Successful queries return a 200 OK HTTP status code along with the payload data.
          </Typography>
          <Paper sx={{ bgcolor: '#0d1117', border: '1px solid #30363d', p: 2.5, borderRadius: 2, overflowX: 'auto', mb: 3 }}>
            <Typography variant="caption" sx={{ color: '#8b949e', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>
              Sample JSON Payload (GET /football-seasons)
            </Typography>
            <pre style={{ margin: 0, fontFamily: 'monospace', color: '#79c0ff', fontSize: '0.85rem' }}>
              <code>{jsonResponse}</code>
            </pre>
          </Paper>
        </Box>
      </Box>
  );
}
