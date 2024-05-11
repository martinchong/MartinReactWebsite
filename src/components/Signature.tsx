import React  from 'react';
import {ReactComponent as Sig} from '../assets/sig.svg';
import './Signature.scss';

export const Signataure = () => {
  return (
    <div className="signature-container">
      <Sig className="signature" />
    </div>
  )
}