import { Grid, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { StaggeredItem } from '../../motion';
import { processStepStyles, processNumberStyles } from '../../styles';
import SectionContainer from './SectionContainer';

export default function ProcessSection({ processStepsData }) {
  const theme = useTheme();
  
  return (
    <SectionContainer 
      title="My Development Process" 
      subtitle="A structured approach to creating exceptional websites"
      withBackground={true}
      id="process"
    >
      <Grid container spacing={4} alignItems="center">
        {processStepsData.map((phase, index) => (
          <Grid item xs={12} md={4} key={index}>
            <StaggeredItem 
              index={index} 
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <Box sx={processStepStyles}>
                <Box sx={processNumberStyles(theme)}>
                  {phase.step}
                </Box>
                <Typography variant="h5" component="h3" gutterBottom>
                  {phase.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {phase.description}
                </Typography>
              </Box>
            </StaggeredItem>
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
}
