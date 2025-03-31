"use client"
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '../app/ThemeRegistry';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Box, 
  Button, 
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import WebIcon from '@mui/icons-material/Web';
import { motion } from 'framer-motion';

export default function Navigation({ isVisible }) {
  const theme = useTheme();
  const pathname = usePathname();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Portfolio', path: '/#portfolio' },
    { name: 'Process', path: '/#process' },
    { name: 'Testimonials', path: '/#testimonials' },
    { name: 'Contact', path: '/contact' }
  ];
  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        WebCraftPro
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link key={item.name} href={item.path} passHref style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem disablePadding>
              <ListItemText 
                primary={item.name} 
                sx={{ 
                  textAlign: 'center', 
                  py: 1,
                  color: pathname === item.path ? 'primary.main' : 'inherit'
                }} 
              />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="default" elevation={2}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Link href="/" passHref style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ display: 'flex', alignItems: 'center' }}
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
            </Link>
            
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
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={item.path} passHref style={{ textDecoration: 'none' }}>
                      <Button 
                        color="inherit" 
                        sx={{ 
                          mx: 1,
                          color: pathname === item.path ? 'primary.main' : 'inherit',
                          fontWeight: pathname === item.path ? 'bold' : 'normal'
                        }}
                      >
                        {item.name}
                      </Button>
                    </Link>
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
    </>
  );
}
