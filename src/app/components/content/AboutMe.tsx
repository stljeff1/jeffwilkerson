import Grid from '@mui/material/Grid2';
import { Box, Button, Container, Link, Typography, useMediaQuery, useTheme } from '@mui/material';

export default function AboutMe() {

    const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box id="about" sx={{
      py: 5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
        <Container maxWidth="lg">
            <Grid container spacing={{xs: 3, md: 6}}>

                <Grid size={{
                    xs: 12, md: 8
                }}>
                    <Typography variant="h2">About Me</Typography>
                    { !isLargeScreen && 
                        <div className='about-me-mobile'>
                            <img src='/images/jeff-n-suzy.jpg' alt="Jeff and his dog Suzy" className='img-fluid'/>    
                        </div>
                    }
                    <Typography sx={{mb: 2}}> 
                        I live with a body affected by cerebral palsy, and as a counter measure, I have pursued a personal yoga practice for over 25 years, including some adaptive yoga teacher training. My practice has taught me the value of resiliency, adaptability, and creative problem-solving. These skills extend into my professional work, where I bring perseverance and an adaptive mindset to every project I take on. Whether professionally or in a yoga class I enjoy empowering others, building trust within groups, and creating an environment where everyone can thrive. 
                    </Typography>
                    <Typography variant="h5" sx={{mb: 2}}>
                        Say Hi!
                    </Typography>
                    <Typography>
                        E-mail me at <Link color="secondary" href='mailto:hi@jeffwilkerson.net'>hi@jeffwilkerson.net</Link>.
                    </Typography>

                    <Button variant='contained' sx={{my: 2}}>Download CVV</Button>
                </Grid>
                    { isLargeScreen &&
                <Grid size={{
                    xs: 12, md: 4
                }}>
                    <img src='/images/jeff-n-suzy.jpg' alt="Jeff and his dog Suzy" className='img-fluid'/>
                </Grid>
                }

            </Grid>
        </Container>
      
    </Box>
  );
}
