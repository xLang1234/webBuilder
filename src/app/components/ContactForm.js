"use client"
import { useState } from 'react';
import { Paper, Typography, Grid, TextField, Button, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

export default function ContactForm({ onSubmitSuccess }) {
  const theme = useTheme();
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: false
      });
    }
  };
  
  // Validate form
  const validateForm = () => {
    const errors = {
      name: formData.name.trim() === '',
      email: !/^\S+@\S+\.\S+$/.test(formData.email),
      message: formData.message.trim() === ''
    };
    
    setFormErrors(errors);
    return !Object.values(errors).some(error => error);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      console.log('Form data:', formData);
      
      // Show success message
      setFormSubmitted(true);
      if (onSubmitSuccess) onSubmitSuccess();
      
      // Reset form after 1 second
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setFormSubmitted(false);
      }, 1000);
    }
  };
  
  // Handle direct email option
  const handleEmailClick = () => {
    const subject = encodeURIComponent('Website Inquiry');
    const body = encodeURIComponent('Hello,\n\nI would like to learn more about your services.\n\nBest regards,');
    window.location.href = `mailto:hello@webcraftpro.com?subject=${subject}&body=${body}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      <Paper elevation={theme.palette.mode === 'dark' ? 4 : 2} sx={{ p: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
          Send a Message
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                error={formErrors.name}
                helperText={formErrors.name ? "Name is required" : ""}
                disabled={formSubmitted}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Your Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                error={formErrors.email}
                helperText={formErrors.email ? "Valid email is required" : ""}
                disabled={formSubmitted}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                disabled={formSubmitted}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Message"
                name="message"
                multiline
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                error={formErrors.message}
                helperText={formErrors.message ? "Message is required" : ""}
                disabled={formSubmitted}
              />
            </Grid>
            <Grid item xs={12}>
              <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                size="large"
                fullWidth
                disabled={formSubmitted}
                sx={{ 
                  py: 1.5,
                  fontSize: '1rem',
                  mt: 2
                }}
              >
                {formSubmitted ? "Sending..." : "Send Message"}
              </Button>
            </Grid>
          </Grid>
        </form>
        
        <Box sx={{ mt: 4, pt: 3, borderTop: 1, borderColor: 'divider' }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Or reach out directly:
          </Typography>
          <Button 
            variant="outlined" 
            startIcon={<EmailIcon />}
            onClick={handleEmailClick}
            sx={{ mr: 2, mb: 2 }}
          >
            Email Us
          </Button>
        </Box>
      </Paper>
    </motion.div>
  );
}
