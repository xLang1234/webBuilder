"use client"
import { useState } from 'react';
import Link from 'next/link';
import { 
  Box, 
  Button, 
  Card, 
  CardContent, 
  CardMedia, 
  Grid, 
  Paper, 
  Avatar, 
  Chip,
  Typography,
  Container
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import DevicesIcon from '@mui/icons-material/Devices';
import SpeedIcon from '@mui/icons-material/Speed';

// Import components
import Layout from './components/Layout';
import PageHeader from './components/PageHeader';
import SectionContainer from './components/SectionContainer';

// Import data
import { 
  servicesData, 
  projectsData, 
  testimonialsData, 
  processStepsData,
  heroData,
  ctaData
} from '../data/websiteData';

export default function Home() {
  const theme = useTheme();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const setSnackbarOpen = (open) => {
    setShowSnackbar(open);
  };

  // Map icon names to actual components
  const getIconComponent = (iconName) => {
    switch(iconName) {
      case 'WebIcon': return <WebIcon fontSize="large" />;
      case 'CodeIcon': return <CodeIcon fontSize="large" />;
      case 'DevicesIcon': return <DevicesIcon fontSize="large" />;
      case 'SpeedIcon': return <SpeedIcon fontSize="large" />;
      default: return null;
    }
  };

  return (
    <Layout 
      title="WebCraftPro | Expert Website Developer"
      description="Professional website development services using modern technologies like React, Next.js and Material UI."
      showSnackbar={showSnackbar}
      snackbarMessage={snackbarMessage}
      setSnackbarOpen={setSnackbarOpen}
    >
      {/* Hero Section - Using PageHeader */}
      <PageHeader 
        title={heroData.title}
        subtitle={heroData.subtitle}
      />
      
      {/* Hero CTA Buttons */}
      <Box sx={{ 
        textAlign: 'center', 
        mt: -4, 
        mb: 6, 
        position: 'relative', 
        zIndex: 1 
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button 
            variant="contained" 
            size="large" 
            sx={{ 
              bgcolor: 'white', 
              color: '#764ba2',
              fontWeight: 'bold',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.9)',
              },
              mr: 2
            }}
          >
            View My Work
          </Button>
          <Link href="/contact" passHref>
            <Button 
              variant="outlined" 
              size="large" 
              sx={{ 
                borderColor: 'white', 
                color: 'white',
                '&:hover': {
                  borderColor: 'rgba(255, 255, 255, 0.9)',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              Get In Touch
            </Button>
          </Link>
        </motion.div>
      </Box>
      
      {/* Services Section - Using SectionContainer */}
      <SectionContainer 
        title="Services" 
        subtitle="End-to-end web development solutions to help your business thrive online"
        withBackground={true}
        id="services"
      >
        <Grid container spacing={4}>
          {servicesData.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                style={{ height: '100%' }}
              >
                <Paper 
                  elevation={theme.palette.mode === 'dark' ? 3 : 2} 
                  sx={{ 
                    p: 3, 
                    height: { xs: 'auto', sm: '280px' },
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(45, 45, 45, 0.6)' : 'background.paper',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 20px rgba(0,0,0,0.3)' : 6
                    }
                  }}
                >
                  <Box sx={{ 
                    color: 'primary.main', 
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2,
                    height: '70px',
                    borderRadius: '50%',
                    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(157, 132, 255, 0.1)' : 'rgba(106, 70, 199, 0.05)'
                  }}>
                    {getIconComponent(service.icon)}
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ mb: 2, height: '32px' }}>
                    {service.title}
                  </Typography>
                  <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
      
      {/* Portfolio Section - Using SectionContainer */}
      <SectionContainer 
        title="Featured Projects" 
        subtitle="A selection of my recent work showcasing my expertise and skills"
        id="portfolio"
      >
        <Grid container spacing={4}>
          {projectsData.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6
                  }
                }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h3">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.tech.map((tech, idx) => (
                        <Chip key={idx} label={tech} size="small" />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button variant="outlined" size="large">
            View All Projects
          </Button>
        </Box>
      </SectionContainer>
      
      {/* Development Process - Using SectionContainer */}
      <SectionContainer 
        title="My Development Process" 
        subtitle="A structured approach to creating exceptional websites"
        withBackground={true}
        id="process"
      >
        <Grid container spacing={4} alignItems="center">
          {processStepsData.map((phase, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 3
                }}>
                  <Box sx={{ 
                    bgcolor: 'primary.main', 
                    color: 'white', 
                    width: 60, 
                    height: 60, 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    mb: 2,
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    boxShadow: theme.palette.mode === 'dark' ? '0 0 20px rgba(157, 132, 255, 0.3)' : '0 0 10px rgba(106, 70, 199, 0.2)'
                  }}>
                    {phase.step}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {phase.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {phase.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
      
      {/* Testimonials - Using SectionContainer */}
      <SectionContainer 
        title="Client Testimonials" 
        subtitle="What my clients say about working with me"
        id="testimonials"
      >
        <Grid container spacing={4}>
          {testimonialsData.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar src={testimonial.avatar} sx={{ width: 56, height: 56, mr: 2 }} />
                    <Box>
                      <Typography variant="h6" component="h3">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.company}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1">
                    &quot;{testimonial.comment}&quot;
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
      
      {/* Call to Action */}
      <Box sx={{ 
        py: 8, 
        background: theme.palette.mode === 'dark' 
          ? 'linear-gradient(135deg, #4338ca 0%, #6d28d9 100%)' 
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              {ctaData.title}
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
              {ctaData.subtitle}
            </Typography>
            <Link href="/contact" passHref>
              <Button 
                variant="contained" 
                size="large" 
                sx={{ 
                  bgcolor: 'white', 
                  color: theme.palette.mode === 'dark' ? '#4338ca' : '#764ba2',
                  fontWeight: 'bold',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                  },
                  mr: 2
                }}
              >
                Contact Me
              </Button>
            </Link>
          </motion.div>
        </Container>
      </Box>
    </Layout>
  );
}
