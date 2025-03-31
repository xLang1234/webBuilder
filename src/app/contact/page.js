"use client"
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { ThemeToggle } from '../ThemeRegistry';
import { motion } from 'framer-motion';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Box, 
  Button, 
  TextField, 
  Grid, 
  Paper, 
  Snackbar,
  Alert,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import WebIcon from '@mui/icons-material/Web';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
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
  const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (validateForm()) {
    // Show loading state
    setFormSubmitted(true);
    
    try {
      // Send form data to API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Show success message
        setSnackbarOpen(true);
        
        // Reset form after success
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          setFormSubmitted(false);
        }, 1000);
      } else {
        // Handle error
        console.error('Form submission error:', data.message);
        alert('There was an error sending your message. Please try again or contact us directly via email.');
        setFormSubmitted(false);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error sending your message. Please try again or contact us directly via email.');
      setFormSubmitted(false);
    }
  }
};
  
  // Handle direct email option
  const handleEmailClick = () => {
    const subject = encodeURIComponent('Website Inquiry');
    const body = encodeURIComponent('Hello,\n\nI would like to learn more about your services.\n\nBest regards,');
    window.location.href = `mailto:hello@webcraftpro.com?subject=${subject}&body=${body}`;
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const navItems = ['Home', 'Services', 'Portfolio', 'Process', 'Testimonials', 'Contact'];
  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        WebCraftPro
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemText primary={item} sx={{ textAlign: 'center', py: 1 }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Head>
        <title>Contact Us | WebCraftPro</title>
        <meta name="description" content="Get in touch with us for professional website development services." />
      </Head>
      
      {/* Navigation */}
      <AppBar position="sticky" color="default" elevation={2}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
            >
              <WebIcon sx={{ mr: 1 }} />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                WebCraftPro
              </motion.span>
            </Typography>
            
            <ThemeToggle />
            
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex' }}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button color="inherit" sx={{ mx: 1 }}>
                      {item}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        {drawer}
      </Drawer>
      
      {/* Page Header */}
      <Box
        sx={{
          background: theme.palette.mode === 'dark' 
            ? 'linear-gradient(135deg, #4338ca 0%, #6d28d9 100%)' 
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              Get In Touch
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Typography variant="h5" component="p" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
              Have a project in mind? Let&apos;s discuss how I can help bring your vision to life.
            </Typography>
          </motion.div>
        </Container>
      </Box>
      
      {/* Contact Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
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
            </Grid>
            
            {/* Contact Info */}
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
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
                      {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((social) => (
                        <Button key={social} variant="outlined" size="small">
                          {social}
                        </Button>
                      ))}
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* FAQ Section */}
      <Box sx={{ 
        py: 8, 
        bgcolor: theme.palette.mode === 'dark' ? 'background.paper' : '#f5f7fa'
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              Frequently Asked Questions
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}>
              Here are answers to some common questions about my services
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {[
              { 
                question: "What is your typical process for working with new clients?", 
                answer: "We start with an initial consultation to understand your requirements, followed by a proposal and timeline. After approval, we move to design, development, testing, and deployment phases with regular updates throughout the process." 
              },
              { 
                question: "How long does it take to build a website?", 
                answer: "A typical website project takes 4-8 weeks from start to finish, depending on the complexity and scope. Simple brochure sites may take 2-3 weeks, while complex e-commerce or custom web applications can take 8-12 weeks or more." 
              },
              { 
                question: "Do you provide ongoing maintenance?", 
                answer: "Yes, I offer monthly maintenance packages to keep your website secure, updated, and performing optimally. These packages include regular updates, security monitoring, backups, and technical support." 
              },
              { 
                question: "What technologies do you use?", 
                answer: "I specialize in modern web technologies including React, Next.js, Material UI, and Tailwind CSS for frontend development. For backend needs, I work with Node.js, Express, and various database systems including MongoDB and SQL databases." 
              },
            ].map((faq, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Paper elevation={theme.palette.mode === 'dark' ? 3 : 1} sx={{ p: 3 }}>
                    <Typography variant="h6" component="h3" gutterBottom sx={{ color: 'primary.main' }}>
                      {faq.question}
                    </Typography>
                    <Typography variant="body1">
                      {faq.answer}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <WebIcon sx={{ mr: 1 }} />
                WebCraftPro
              </Typography>
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
                {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((social) => (
                  <Button key={social} size="small">
                    {social}
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
      
      {/* Success message */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setSnackbarOpen(false)} 
          severity="success" 
          sx={{ width: '100%' }}
        >
          Thanks for your message! I&apos;ll be in touch soon.
        </Alert>
      </Snackbar>
    </>
  );
}
