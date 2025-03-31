"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Import components
import Layout from './components/Layout';
import PageHeader from './components/PageHeader';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import CallToAction from './components/CallToAction';

// Import styles
import { heroCTAStyles, outlinedButtonStyles, primaryButtonStyles } from '../styles';

// Import motion components
import { FadeInUp } from '../motion';

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
      <Box sx={heroCTAStyles}>
        <FadeInUp delay={0.6}>
          <Link href="/contact" passHref>
            <Button 
              variant="outlined" 
              size="large" 
              sx={outlinedButtonStyles}
            >
              Get In Touch
            </Button>
          </Link>
        </FadeInUp>
      </Box>
      
      {/* Services Section */}
      <ServicesSection servicesData={servicesData} />
      
      {/* Portfolio Section */}
      <ProjectsSection projectsData={projectsData} />
      
      {/* Development Process Section */}
      <ProcessSection processStepsData={processStepsData} />
      
      {/* Testimonials Section */}
      <TestimonialsSection testimonialsData={testimonialsData} />
      
      {/* Call to Action */}
      <CallToAction data={ctaData} />
    </Layout>
  );
}
