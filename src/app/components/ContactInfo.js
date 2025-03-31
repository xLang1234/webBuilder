"use client"
import { Paper, Typography, Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ContactInfo() {
  const theme = useTheme();
  const socialLinks = ['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'];
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      <Paper 
        elevation={theme.palette.mode === 'dark' ? 4 : 2} 
        sx={{ 
          p: 4,
          height: '100%',
          background: theme.palette.mode === 'dark' 
            ? 'linear-gradient(135deg, rgba(67, 56, 202, 0.1) 0%, rgba(109, 40, 217, 0.1) 100%)' 
            : 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
          Contact Information
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
            <Box>
              <Typography variant="h6" component="h3" gutterBottom>
                Email
              </Typography>
              <Typography variant="body1" paragraph>
                hello@webcraftpro.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                For project inquiries and general questions
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
            <Box>
              <Typography variant="h6" component="h3" gutterBottom>
                Phone
              </Typography>
              <Typography variant="body1" paragraph>
                (123) 456-7890
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Available Mon-Fri, 9am-5pm PST
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <LocationOnIcon sx={{ mr: 2, color: 'primary.main' }} />
            <Box>
              <Typography variant="h6" component="h3" gutterBottom>
                Location
              </Typography>
              <Typography variant="body1" paragraph>
                San Francisco, CA
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Working remotely with clients worldwide
              </Typography>
            </Box>
          </Box>
        </Box>
        
        {/* Social links */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h6" component="h3" gutterBottom>
            Connect With Me
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            {socialLinks.map((social) => (
              <Button key={social} variant="outlined" size="small">
                {social}
              </Button>
            ))}
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
}
