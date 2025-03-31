import { Grid, Paper, Box, Typography, Avatar } from '@mui/material';
import { StaggeredItem } from '../../motion';
import { testimonialCardStyles } from '../../styles';
import SectionContainer from './SectionContainer';

export default function TestimonialsSection({ testimonialsData }) {
  return (
    <SectionContainer 
      title="Client Testimonials" 
      subtitle="What my clients say about working with me"
      id="testimonials"
    >
      <Grid container spacing={4}>
        {testimonialsData.map((testimonial, index) => (
          <Grid item xs={12} md={4} key={index}>
            <StaggeredItem index={index}>
              <Paper elevation={2} sx={testimonialCardStyles}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar src={testimonial.avatar} sx={{ width: 56, height: 56, mr: 2 }} />
                  <Box>
                    <Typography variant="h6" component="h3">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.company}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1">
                  &quot;{testimonial.comment}&quot;
                </Typography>
              </Paper>
            </StaggeredItem>
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
}
