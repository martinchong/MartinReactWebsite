import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Signataure } from './Signature';
import './Intro.scss';

const pdfUrl = "Martin Chong Full Stack Developer Resume.pdf";

const Intro = () => {
  return (
    <Container>
      <Signataure />
      <div className="intro-container">
        <Typography variant='h1' color='primary' className='intro-container__name'>Hello my name is <span className='intro-container__name-highlight'>Martin</span> Chong</Typography>
        <Typography variant='h2' color='primary'>Fullstack Developer</Typography>
      </div>
      <div id="about-me" className="intro-container--about-me">
        <div className='intro-container'>
          <Typography variant='h1' color='primary'>About <span className='intro-container__name-highlight'>Me</span></Typography>
          <Typography color='primary' className='intro-container__my-story'>So who am I? Well, that is a question I ask myself everyday. To be honest, I think I am still searching for the answer, but right now I am a Fullstack Developer with years of expereince working in a start up company. A developer who is loyal and truthful. If you wanna know me better, do not hesitate to shoot me a <a href="mailto:martinmanho@gmail.com">message</a>! You can also just check out my <a href={pdfUrl} target="_blank" rel="noreferrerYY">resume</a> to see if there is anything inside that can pique your interest.</Typography>
        </div>
        <Box
          className='intro-container__my-image'
          component="img"
          display="flex"
          height={200}
          minWidth={200}
          width={200}
        />
      </div>
    </Container>
  );
}

export default Intro;
