import React from 'react'
import { ThemeProvider, responsiveFontSizes, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  let theme = createTheme();
theme = responsiveFontSizes(theme);


export const About = () => {
  return (
    <React.Fragment>
    <ThemeProvider theme={darkTheme}>
   <CssBaseline />
   <Container maxWidth="md">
   <Box sx={{ bgcolor: 'default', height: '100vh' }} >
   <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
  
           <ThemeProvider theme={theme}>
            <Typography variant='h3'
            sx={{fontFamily: 'Poppins', fontWeight:'500', pt:20 }}>About</Typography>
          </ThemeProvider>
            
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
  
   
 </Grid>
 <Grid item xs={12} sm={12} md={6}>
  
  <ThemeProvider theme={theme}>
   <Typography variant='subtitle1'
   sx={{fontFamily: 'Poppins', fontWeight:'500' }}>Hi. I'm Ivan, nice to meet you. Please take a look around</Typography>
 </ThemeProvider>
   
 </Grid>
 <Grid item xs={12} sm={12} md={6}>
  
  <ThemeProvider theme={theme}>
   <Typography variant='subtitle1'
   sx={{fontFamily: 'Poppins', fontWeight:'500' }}> Hi. I am Ivan, a Web Developer.
   I have skills in Front-end Development such like building
   functional websites and responsive web designs. Knowledgeable in HTML, CSS and Javascript and
   can work with JS libraries such as React. Also I have knowledge and skills in Back-end Development inline with PHP and MySql.</Typography>
 </ThemeProvider>
   
 </Grid>
          </Grid>
          </Box>
    </Box>
    </Container>
    </ThemeProvider>
    </React.Fragment>
  )
}
