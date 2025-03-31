import Link from 'next/link';
import { Box, Button, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FadeInUp } from '../../motion';
import { ctaSectionStyles, ctaTitleStyles, ctaSubtitleStyles, primaryButtonStyles } from '../../styles';

export default function CallToAction({ data }) {
  const theme = useTheme();
  
  return (
    <Box sx={ctaSectionStyles(theme)}>
      <Container maxWidth="md">
        <FadeInUp>
          <Typography variant="h3" component="h2" gutterBottom sx={ctaTitleStyles}>
            {data.title}
          </Typography>
          <Typography variant="h6" sx={ctaSubtitleStyles}>
            {data.subtitle}
          </Typography>
          <Link href="/contact" passHref>
            <Button 
              variant="contained" 
              size="large" 
              sx={primaryButtonStyles(theme)}
            >
              Contact Me
            </Button>
          </Link>
        </FadeInUp>
      </Container>
    </Box>
  );
}
