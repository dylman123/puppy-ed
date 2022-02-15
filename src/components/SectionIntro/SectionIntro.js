import React from 'react';
import mainImage from './Education.svg';

import './SectionIntro.css';

export default function SectionIntro(props) {
  return (
    <div className={`sectionIntro ${props.className}`}>
      <div className='headingsContainer'>
        <h1 className='heading1'>
          ANKC registered breeders educating the wider community
        </h1>
        <h2 className='heading3'>
          Write your own learner module for potential puppy owners to complete.
        </h2>
        <div className='ctaContainer'>
          <a className='ctaPrimary' href='/#signUp'>
            Become an author
          </a>
          <a className='ctaSecondary' href='/learning-centre'>
            view learner modules
          </a>
        </div>
      </div>
      <div className='imageContainer'>
        <img src={mainImage} className='mainImage' alt='Labrador teacher' />
      </div>
    </div>
  );
}
