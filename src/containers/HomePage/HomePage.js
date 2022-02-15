import React from 'react';
import SectionIntro from '../../components/SectionIntro/SectionIntro';
import SectionHowItWorks from '../../components/SectionHowItWorks/SectionHowItWorks';
import SectionSignUp from '../../components/SectionSignUp/SectionSignUp';

export default function HomePage() {
  return (
      <div className='homePage'>
        <SectionIntro />
        <SectionHowItWorks />
        <SectionSignUp />
      </div>
  );
}
