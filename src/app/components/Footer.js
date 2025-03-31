"use client"
import Link from 'next/link';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/' },
    { name: 'LinkedIn', url: 'https://linkedin.com/' },
    { name: 'Twitter', url: 'https://twitter.com/' },
    { name: 'Dribbble', url: 'https://dribbble.com/' }
  ];
  
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Link href="/" passHref style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <WebIcon sx={{ mr: 1 }} />
                WebCraftPro
              </Typography>
            </Link>
            <Typography variant="body2" color="text.secondary">
              Creating beautiful, functional websites that help businesses succeed online.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: hello@webcraftpro.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: (123) 456-7890
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Location: San Francisco, CA
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Me
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, my: 1 }}>
              {socialLinks.map((social) => (
                <Button 
                  key={social.name} 
                  size="small"
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.name}
                </Button>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} WebCraftPro. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
