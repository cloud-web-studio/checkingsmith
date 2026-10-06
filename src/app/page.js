'use client';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from '../components/AppAppBar';
import Hero from '../components/Hero';
import LogoCollection from '../components/LogoCollection';
import Highlights from '../components/Highlights';
import Pricing from '../components/Pricing';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import SportsList from '@/components/sportslist';
import Developer from '@/components/developer';
import KeyFeatures from '@/components/keyfeature';
import DeveloperChoose from '@/components/DeveloperChoose';
import LineComponent from '@/components/linecomponent';

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

export default function Home(props) {



  return (
    <AppTheme {...props}>
    {/* <> */}
        <CssBaseline enableColorScheme />
        <AppAppBar />
        <Hero />
        <div>
        <Divider />
        <LineComponent />
        {/* <LogoCollection /> */}
        <Divider />
        <DeveloperChoose />
        <Divider />
        <KeyFeatures />
        <Divider />
        <SportsList />
        <Divider />
        <Developer />
        <Divider />
        {/* <Features /> */}
        {/* <Testimonials /> */}
        {/* <Highlights /> */}
        {/* <Pricing /> */}
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </div>
      {/* </> */}
    </AppTheme>
  );
}