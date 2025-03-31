"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';
import { ScrollTop } from './ScrollTop';
import { Box, Fab, Snackbar, Alert } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Layout({ children, title, description, showSnackbar, snackbarMessage, setSnackbarOpen }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight * 0.75;
        
        if (isInViewport) {
          el.classList.add('animate');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>{title || 'WebCraftPro | Expert Website Developer'}</title>
        <meta name="description" content={description || 'Professional website development services using modern technologies like React, Next.js and Material UI.'} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navigation isVisible={isVisible} />
      
      <main>
        {children}
      </main>
      
      <Footer />
      
      <ScrollTop>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      
      {showSnackbar && (
        <Snackbar
          open={showSnackbar}
          autoHideDuration={6000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
            onClose={() => setSnackbarOpen(false)} 
            severity="success" 
            sx={{ width: '100%' }}
          >
            {snackbarMessage || 'Thanks for your message! I\'ll be in touch soon.'}
          </Alert>
        </Snackbar>
      )}
      
      {/* Add global styles for animations */}
      <style jsx global>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .scroll-animate.animate {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}
