import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import './Footer.scss';

const Footer = () => {
  return (
    <Container>
      <div className="footer">
        <Typography color='primary' className='footer__text'>© 2024 <span className='intro-container__name-highlight'>Martin</span> Chong</Typography>
      </div>
    </Container>
  );
}

export default Footer;
