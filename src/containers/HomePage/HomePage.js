import React from 'react';
import SectionIntro from './SectionIntro/SectionIntro';
import SectionHowItWorks from './SectionHowItWorks/SectionHowItWorks';
import SectionSignUp from './SectionSignUp/SectionSignUp';
import SectionOurMission from './SectionOurMission/SectionOurMission';

import './HomePage.css';

export default function HomePage() {
  return (
    <div className='homePage'>
      <div className='section' id='intro'>
        <SectionIntro />
      </div>
      <div className='section' id='how-it-works'>
        <SectionHowItWorks />
      </div>
      <div className='section' id='our-mission'>
        <SectionOurMission />
      </div>
      <div className='highlighted' id='join'>
        <SectionSignUp />
      </div>
    </div>
  );
}
