import React from 'react';
import mainImage from './Education.svg';

import './SectionIntro.css';

export default function SectionIntro() {
  return (
    <div className='responsiveContainer mobile-column-reverse'>
      <div className='headingsContainer'>
        <h1>
          Community driven education by ANKC registered breeders
        </h1>
        <h3>
          Contribute your expertise to a growing knowledge base about purebred dogs.
        </h3>
        <div className='ctaContainer'>
          <a className='ctaPrimary' href='/learning-centre'>
            View breeds
          </a>
          <a className='ctaSecondary' href='/#join'>
            Become an author
          </a>
        </div>
      </div>
      <div className='imageContainer'>
        <img src={mainImage} className='mainImage' alt='Labrador teacher' />
      </div>
    </div>
  );
}
