"use client"
import { Box, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function SectionContainer({ 
  title, 
  subtitle, 
  children, 
  withBackground = false,
  id = undefined,
  py = 8
}) {
  const theme = useTheme();
  
  return (
    <Box 
      id={id}
      sx={{ 
        py: py, 
        bgcolor: withBackground 
          ? (theme.palette.mode === 'dark' ? 'background.paper' : '#f5f7fa')
          : 'transparent'
      }}
    >
      <Container maxWidth="lg">
        {(title || subtitle) && (
          <Box sx={{ textAlign: 'center', mb: 6 }} className="scroll-animate">
            {title && (
              <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
                {title}
              </Typography>
            )}
            {subtitle && (
              <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}>
                {subtitle}
              </Typography>
            )}
          </Box>
        )}
        
        {children}
      </Container>
    </Box>
  );
}
