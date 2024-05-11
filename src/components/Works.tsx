import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Work, { IWork } from './Work';
import './Works.scss';

import hopiumImage from '../assets/hopium.png';
import atHeartImage from '../assets/at-heat-demo.png';
import riderbookerImage from '../assets/ridebooker.png';


const allWork: IWork[] = [
  {
    name: 'Hopium Ai',
    description: 'An subscribition based stock, forex, crypto anaylysing web application with customizable screener and real time email notification service.',
    image: hopiumImage,
  },
  {
    name: 'At Heart',
    description: 'An interactive chat bot created for a medical research team in University of Toronto, targeting women with heart pain diseases, providing them instant feedback and daily check up with a compassionate AI bot.',
    image: atHeartImage,
  },
  {
    name: 'Ridebooker',
    description: 'An interactive chat bot created for a medical research team in University of Toronto, targeting women with heart pain diseases, providing them instant feedback and daily check up with a compassionate AI bot.',
    image: riderbookerImage,
  }
];

const Works = () => {
  return (
    <Container>
      <div className="works-container">
        <Typography variant='h1' color='primary' className='works-container__title'><span className='intro-container__name-highlight'>Some</span> of my Work (just some...)</Typography>
        {allWork.map((work) => {
          return <Work key={work.name} name={work.name} description={work.description} image={work.image} />
        } )}
      </div>
    </Container>
  );
}

export default Works;
