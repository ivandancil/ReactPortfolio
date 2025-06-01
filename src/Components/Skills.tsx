import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider, responsiveFontSizes, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JAVASCRIPT from '../assets/javascript.png'
import REACT from '../assets/react.png'
import GITHUB from '../assets/github.png'
import NODE from '../assets/node.png'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
     
    }),
  }));
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  
  
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  

export const Skills= () => {

  return (
    <React.Fragment>
    <ThemeProvider theme={darkTheme}>
   <CssBaseline />
   <Container maxWidth="md">
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={1}>
    <Grid item xs={12} sm={12} md={6}>
  
  <ThemeProvider theme={theme}>
   <Typography variant='h3'
   sx={{fontFamily: 'Poppins', fontWeight:'500' }}>Skills</Typography>
 </ThemeProvider>
   
 </Grid>

 <Grid item xs={12} sm={12} md={6}>


</Grid>
<Grid item xs={12} sm={12} md={6} >
<ThemeProvider theme={theme}>
   <Typography variant='subtitle1'
   sx={{fontFamily: 'Poppins', fontWeight:'500' }}>// These are the technologies I've worked with</Typography>
 </ThemeProvider>

</Grid>
<Grid item xs={12} sm={12} md={6}>


</Grid>
      <Grid item xs={4} sm={2} md={2}>
       
      <Item>
        <ImageList sx={{ maxWidth: 200, padding:2 }} cols={1} >
        <ImageListItem>
            <img src={HTML} alt="" />
            <Typography color='white' textAlign='center' fontWeight='600'>HTML</Typography>
        </ImageListItem>
        </ImageList>
        </Item>
        
      </Grid>
      <Grid item xs={4} sm={2} md={2}>
       <Item>
        <ImageList sx={{ maxWidth: 200, padding:2 }} cols={1} >
        <ImageListItem>
            <img src={CSS} alt="" />
            <Typography color='white' fontWeight='600' textAlign='center'>CSS</Typography>
        </ImageListItem>
        </ImageList>
        </Item>
      </Grid>
      <Grid item xs={4} sm={2} md={2}>
      <Item>
        <ImageList sx={{ maxWidth: 200, padding:2 }} cols={1} >
        <ImageListItem>
            <img src={JAVASCRIPT} alt="" />
            <Typography color='white' textAlign='center' fontWeight='600'>JSCRIPT</Typography>
        </ImageListItem>
        </ImageList>
        </Item>
      </Grid>
      <Grid item xs={4} sm={2} md={2}>
        <Item>
        <ImageList sx={{ maxWidth: 200, padding:2 }} cols={1} >
        <ImageListItem>
            <img src={REACT} alt="" />
            <Typography color='white' textAlign='center' fontWeight='600'>REACT</Typography>
        </ImageListItem>
        </ImageList>
        </Item>
      </Grid>
      <Grid item xs={4} sm={2} md={2}>
       <Item>
        <ImageList sx={{ maxWidth: 200, padding:2 }} cols={1} >
        <ImageListItem>
            <img src={GITHUB} alt="" />
            <Typography color='white' textAlign='center' fontWeight='600'>GITHUB</Typography>
        </ImageListItem>
        </ImageList>
        </Item>
      </Grid>
      <Grid item xs={4} sm={2} md={2}>
       <Item>
        <ImageList sx={{ maxWidth: 200, padding:2 }} cols={1} >
        <ImageListItem>
            <img src={NODE} alt="" />
            <Typography color='white' textAlign='center' fontWeight='600'>NODE</Typography>
        </ImageListItem>
        </ImageList>
        </Item>
      </Grid>
     
    </Grid>
  </Box>
  </Container>
  </ThemeProvider>
  </React.Fragment>
);
}