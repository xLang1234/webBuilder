export const primaryButtonStyles = (theme) => ({
  bgcolor: 'white', 
  color: theme.palette.mode === 'dark' ? '#4338ca' : '#764ba2',
  fontWeight: 'bold',
  '&:hover': {
    bgcolor: 'rgba(255, 255, 255, 0.9)',
  },
  mr: 2
});

export const outlinedButtonStyles = {
  borderColor: 'white', 
  color: 'white',
  '&:hover': {
    borderColor: 'rgba(255, 255, 255, 0.9)',
    bgcolor: 'rgba(255, 255, 255, 0.1)',
  }
};

export const viewAllButtonStyles = {
  textAlign: 'center', 
  mt: 4
};
