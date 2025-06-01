import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { ThemeProvider, responsiveFontSizes, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});




let theme = createTheme();
theme = responsiveFontSizes(theme);


export const Home = () => {
  return (
    <React.Fragment>
       <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: 'default', height: '100vh' }} >
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={12}>
  
           <ThemeProvider theme={theme}>
            <Typography variant='h6'
            sx={{fontFamily: 'Poppins', pt: 10 }}>Hi my name is</Typography>
          </ThemeProvider>
            
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
          <ThemeProvider theme={theme}>
          <Typography variant='h2'
            sx={{fontFamily: 'Poppins', fontWeight:'500'}}>Ivan Dancil</Typography>
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
          <ThemeProvider theme={theme}>
          <Typography variant='h3'
            sx={{fontFamily: 'Poppins'}}>I am a Frontend Developer</Typography>
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
          <ThemeProvider theme={theme}>
          <Typography variant='subtitle1'
            sx={{fontFamily: 'Poppins', pb: 3}}>
              Hi. I am Ivan, a Web Developer.
              I have skills in Front-end Development such like building
              functional websites and responsive web designs. Knowledgeable in HTML, CSS and Javascript and
              can work with JS libraries such as React. Also I have knowledge and skills in Back-end Development inline with PHP and MySql.
              </Typography>
          </ThemeProvider>
          <Button variant="contained"  size='medium' endIcon={<ArrowForwardIcon/>} >View Work</Button>
          </Grid>
        </Grid>
        </Box>
      </Box>
      </Container>
      </ThemeProvider>
    </React.Fragment>
  )
}
