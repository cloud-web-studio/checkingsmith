import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Alert,
  Snackbar,
  Grid
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { SubmitContact } from '@/actions/actions';

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', msg: '', from:'website' });
  const [sent, setSent] = useState(false);

      const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const result = await SubmitContact(form)
      if(!result.status){
        alert(result.error)
        return;
      }
      setSent(true);
      setTimeout(() => {
        setSent(false);
      },10000)
      setForm({ name: '', email: '', msg: '', from:'website' })
    };

  return (
    <Container maxWidth="sm" sx={{mb:5}}>
        <Box textAlign="center" >
          <Typography variant="h1" gutterBottom > Contact us </Typography>
          <Typography variant="body1" sx={{ color: '#8b949e', maxWidth: 550, mx: 'auto' }} >
           Have questions about football API integration, refund, or custom enterprise plans? Send us a message and our tech team will respond shortly.
          </Typography>
        </Box>
        {sent && <Alert severity="success" sx={{ mt: 2, width: '100%' }}>Thanks for contacting us. One of our API specialists will review your message and get back to you within 24 hours.</Alert>}
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, width: '100%' }}>
          <TextField margin="normal" required fullWidth label="Full Name" name="name" value={form.name} onChange={handleChange} />
          <TextField margin="normal" required fullWidth label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} />
          <TextField margin="normal"required fullWidth multilinerows={4} label="Message" name="msg" value={form.msg} onChange={handleChange}/>
          <Button type="submit" fullWidth size="large" variant="contained" endIcon={<SendIcon />}
            sx={{ py: 1, mt:2, borderRadius: 1.5, fontWeight: 700, fontSize: '1rem', textTransform: 'none',
              '&:hover': {
                bgcolor: '#58a6ff',
                borderColor:'#58a6ff',
                color:'white'
              }
            }}
          >
            Send Message
          </Button>
        </Box>
    </Container>
  );
}
