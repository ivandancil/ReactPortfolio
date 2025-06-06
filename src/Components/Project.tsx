import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider, responsiveFontSizes, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Project1 from '../assets/project1.png'


  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  
  
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  

export const Project = () => {
  return (
    <React.Fragment>
    <ThemeProvider theme={darkTheme}>
   <CssBaseline />
   <Container maxWidth="md">
    <Box sx={{ flexGrow: 1, pt:15 }}>
    <Grid container spacing={1}>
    <Grid item xs={12} sm={12} md={6}>
  
  <ThemeProvider theme={theme}>
   <Typography variant='h3'
   sx={{fontFamily: 'Poppins', fontWeight:'500' }}>Project</Typography>
 </ThemeProvider>
   
 </Grid>
 <Grid item xs={12} sm={12} md={6}>


</Grid>
<Grid item xs={12} sm={12} md={6} >
<ThemeProvider theme={theme}>
   <Typography variant='subtitle1'
   sx={{fontFamily: 'Poppins', fontWeight:'500' }}>// Check out some of my recent work</Typography>
 </ThemeProvider>

</Grid>
<Grid item xs={12} sm={12} md={6}>


</Grid>

      <Grid item xs={6} sm={4} md={4}>
       
      
        <ImageList sx={{ maxWidth: 300, padding:1 }} cols={1}>
        <ImageListItem>
            <img src={Project1} alt="" />
            <Typography color='white' textAlign='center' fontWeight='600'>Project1</Typography>
        </ImageListItem>
        </ImageList>
     
        
        
      </Grid>
      <Grid item xs={6} sm={4} md={4}>
       
        <ImageList sx={{ maxWidth: 300, padding:1 }} cols={1} >
        <ImageListItem>
            <img src={Project1} alt="" />
            <Typography color='white' fontWeight='600' textAlign='center'>Project2</Typography>
        </ImageListItem>
        </ImageList>
       
      </Grid>
      <Grid item xs={6} sm={4} md={4}>
      
        <ImageList sx={{ maxWidth: 300, padding:1 }} cols={1} >
        <ImageListItem>
            <img src={Project1} alt="" />
            <Typography color='white' textAlign='center' fontWeight='600'>Project3</Typography>
        </ImageListItem>
        </ImageList>
       
      </Grid>
      <Grid item xs={6} sm={4} md={4}>
        
        <ImageList sx={{ maxWidth: 300, padding:1 }} cols={1} >
        <ImageListItem>
            <img src={Project1} alt="" />
            <Typography color='white' textAlign='center' fontWeight='600'>Project4</Typography>
        </ImageListItem>
        </ImageList>
        
      </Grid>
      <Grid item xs={6} sm={4} md={4}>
       
       
        <ImageList sx={{ maxWidth: 300, padding:1 }} cols={1} >
        <ImageListItem>
            <img src={Project1} alt="" />
            <Typography color='white' textAlign='center' fontWeight='600'>Project5</Typography>
        </ImageListItem>
        </ImageList>
     
  
        
      </Grid>
      <Grid item xs={6} sm={4} md={4}>
       
        <ImageList sx={{ maxWidth: 300, padding:1 }} cols={1} >
        <ImageListItem>
            <img src={Project1} alt="" />
            <Typography color='white' textAlign='center' fontWeight='600'>Project6</Typography>
        </ImageListItem>
        </ImageList>
        
      </Grid>
     
    </Grid>
  </Box>
  </Container>
  </ThemeProvider>
  </React.Fragment>
  )
}
