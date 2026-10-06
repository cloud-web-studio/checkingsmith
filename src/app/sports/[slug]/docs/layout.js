'use client'
import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SideMenu from './components/sidebar';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import AppTheme from '@/shared-theme/AppTheme';
import CssBaseline from '@mui/material/CssBaseline';

export default function Page({children, props}) {
  return (
    <AppTheme {...props}>
        <CssBaseline enableColorScheme />
        <Box sx={{ display: 'flex'}}>
            <SideMenu />
            <Box sx={{ width:'100%', height:'100vh', color:'black', p:3, backgroundColor:'white', overflow:'auto' }}>
                {children}
            </Box>
        </Box>
    </AppTheme>
  );
}