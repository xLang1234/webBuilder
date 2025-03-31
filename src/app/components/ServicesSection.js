import { Grid, Paper, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { StaggeredItem } from '../../motion';
import { serviceCardStyles, serviceIconStyles } from '../../styles';
import { getIconComponent } from '../../utils/iconMapping';
import SectionContainer from './SectionContainer';

export default function ServicesSection({ servicesData }) {
  const theme = useTheme();
  
  return (
    <SectionContainer 
      title="Services" 
      subtitle="End-to-end web development solutions to help your business thrive online"
      withBackground={true}
      id="services"
    >
      <Grid container spacing={4}>
        {servicesData.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StaggeredItem index={index} style={{ height: '100%' }}>
              <Paper 
                elevation={theme.palette.mode === 'dark' ? 3 : 2} 
                sx={serviceCardStyles(theme)}
              >
                <Box sx={serviceIconStyles(theme)}>
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
            </StaggeredItem>
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
}
