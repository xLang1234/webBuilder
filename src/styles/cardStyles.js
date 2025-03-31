export const serviceCardStyles = (theme) => ({
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
});

export const projectCardStyles = {
  height: '100%', 
  display: 'flex', 
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: 6
  }
};

export const testimonialCardStyles = {
  p: 3, 
  height: '100%'
};

export const serviceIconStyles = (theme) => ({ 
  color: 'primary.main', 
  mb: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  p: 2,
  height: '70px',
  borderRadius: '50%',
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(157, 132, 255, 0.1)' : 'rgba(106, 70, 199, 0.05)'
});

export const processStepStyles = { 
  display: 'flex', 
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  p: 3
};

export const processNumberStyles = (theme) => ({ 
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
});
