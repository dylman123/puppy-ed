import React from 'react';
import image from './breeder.png';

import './SectionOurMission.css'

export default function SectionOurMission() {
  return (
    <div className='sectionOurMission'>
      <div className='responsiveContainer'>
        <div className='textContainer'>
          <div className='headingsContainer'>
            <h2>
              For ANKC registered breeders
            </h2>
            <h4>
              Why we’re working together
            </h4>
          </div>
          <p>
            ANKC registered breeders breed for the continuity, health and excellent standards of purebred dogs. 
          </p>
          <p>
            We know that breeders have years of experience and knowledge, as well as the unmatched passion for their breed to educate the wider community. 
          </p>
          <p>
            We are determined to better educate the wider community on the importance and beauty of purebred dogs around Australia and we want those that know the most - ANKC registered breeders to be at the forefront of that. 
          </p>
        </div>
        <div className='imageContainer'>
          <img src={image} className='image' alt='Labrador breeder' />
        </div>
      </div>
    </div>
  );
}
