'use client'
// import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import AppAppBar from '@/components/AppAppBar';
import Footer from '@/components/Footer';
import AppTheme from '@/shared-theme/AppTheme';
import CssBaseline from '@mui/material/CssBaseline';
import Single from './components/single';

export default function Page({children, props}) {
  return (
    <AppTheme {...props}>
        <CssBaseline enableColorScheme />
        <AppAppBar />
          <Single />
        <Footer />
    </AppTheme>
  );
}