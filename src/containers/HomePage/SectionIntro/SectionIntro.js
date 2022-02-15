import React from 'react';
import mainImage from './Education.svg';

import './SectionIntro.css';

export default function SectionIntro() {
  return (
    <div className='sectionIntro'>
      <div className='headingsContainer'>
        <h1>
          ANKC registered breeders educating the wider community
        </h1>
        <h3>
          Write your own learner module for potential puppy owners to complete.
        </h3>
        <div className='ctaContainer'>
          <a className='ctaPrimary' href='/#join'>
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
