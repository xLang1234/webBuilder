export const heroCTAStyles = { 
  textAlign: 'center', 
  mt: -4, 
  mb: 6, 
  position: 'relative', 
  zIndex: 1 
};

export const ctaSectionStyles = (theme) => ({ 
  py: 8, 
  background: theme.palette.mode === 'dark' 
    ? 'linear-gradient(135deg, #4338ca 0%, #6d28d9 100%)' 
    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  textAlign: 'center'
});

export const ctaTitleStyles = { 
  fontWeight: 700
};

export const ctaSubtitleStyles = { 
  mb: 4, 
  maxWidth: '800px', 
  mx: 'auto' 
};
