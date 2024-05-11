import React from 'react';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'

import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import './Appbar.scss';

const Appbar = () => {

  const topScroll = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const aboutMeScroll = () => {
    const element = document.getElementById("about-me");
    var headerOffset = 70;
    var elementPosition = element ? element.getBoundingClientRect().top : 0;
    var y = elementPosition + window.scrollY - headerOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  };

  const workScroll = () => {
    const element = document.getElementById("work-sample");
    var headerOffset = 70;
    var elementPosition = element ? element.getBoundingClientRect().top : 0;
    var y = elementPosition + window.scrollY - headerOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  };

  const pdfUrl = "Martin Chong Full Stack Developer Resume.pdf";

  return (
    <AppBar className='appbar' position='fixed'>
      <Container maxWidth="xl">
        <Toolbar disableGutters  className='appbar__toolbar'>
          <div className='appbar__nav'>
            <Typography color='primary' className='appbar__title' onClick={topScroll}>
              <span className='appbar__title--highlight'>M</span>ARTIN
            </Typography>
            <Typography color='primary' className='appbar__title' onClick={aboutMeScroll}>
              About Me
            </Typography>
            <Typography color='primary' className='appbar__title' onClick={workScroll}>
              Works
            </Typography>
            <Link href={pdfUrl} target="_blank" rel="noopener" underline="none">
              <Typography color='primary' className='appbar__title'>
                Resume
              </Typography>
            </Link>
          </div>
          <div className='appbar__socials'>
            <Link href="https://www.linkedin.com/in/martin-chong-940715/" target="_blank" rel="noopener">
              <LinkedInIcon color='primary' />
            </Link>
            <Link href="https://github.com/martinchong" target="_blank" rel="noopener">
              <GitHubIcon color='primary' />
            </Link>
            <Link href="mailto:martinmanho@gmail.com" target="_blank" rel="noopener">
              <EmailIcon color='primary' />
            </Link>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Appbar;
