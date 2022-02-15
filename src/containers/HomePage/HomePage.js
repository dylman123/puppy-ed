import React from 'react';
import SectionIntro from '../../components/SectionIntro/SectionIntro';
import SectionHowItWorks from '../../components/SectionHowItWorks/SectionHowItWorks';
import SectionSignUp from '../../components/SectionSignUp/SectionSignUp';

export default function HomePage() {
  return (
      <div className='homePage'>
        <SectionIntro className='section' />
        <SectionHowItWorks className='section' />
        <SectionSignUp className='section' />
      </div>
  );
}
