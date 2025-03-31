import { Grid, Card, CardMedia, CardContent, Typography, Box, Chip, Button } from '@mui/material';
import { StaggeredItem } from '../../motion';
import { projectCardStyles, viewAllButtonStyles } from '../../styles';
import SectionContainer from './SectionContainer';

export default function ProjectsSection({ projectsData }) {
  return (
    <SectionContainer 
      title="Featured Projects" 
      subtitle="A selection of my recent work showcasing my expertise and skills"
      id="portfolio"
    >
      <Grid container spacing={4}>
        {projectsData.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <StaggeredItem index={index}>
              <Card sx={projectCardStyles}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.tech.map((tech, idx) => (
                      <Chip key={idx} label={tech} size="small" />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </StaggeredItem>
          </Grid>
        ))}
      </Grid>
      
      <Box sx={viewAllButtonStyles}>
        <Button variant="outlined" size="large">
          View All Projects
        </Button>
      </Box>
    </SectionContainer>
  );
}
