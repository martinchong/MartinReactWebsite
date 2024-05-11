import React from 'react';

import Typography from '@mui/material/Typography';

import './Work.scss';

export interface IWork {
  name: string,
  description: string,
  image?: string,
}

const Work = ({name, description, image}: IWork) => {
  return (
    <div id="work-sample" className="work-sample" >
      <div className="work-sample__text">
        <Typography variant='h3' color='primary' className='work-sample__name'>{name}</Typography>
        <Typography color='primary' className='work-sample__descripton'>{description}</Typography>
      </div>
      {image && <img className='work-sample__image' src={image} alt={`${name}`} />}
    </div>
  );
}

export default Work;
