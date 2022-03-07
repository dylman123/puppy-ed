import React from 'react';
import './HelpPage.css'
import image from './reachout.svg';

export default function HelpPage() {
  return (
    <div className='helpPage'>
      <h1 className='pageTitle'>Contact us</h1>
      <img className='coverImage' src={image} alt="Reach out" />

      <div className='contentMain'>
        <p className='contentOpener'>Please don't hesitate to reach out!</p>
        <p className='subText'>For any questions, comments, feedback or just to say hi, contact the Puppy Ed team.</p>
        <div>
          <h2 className='contactMethod'>
            Email us
          </h2>
          <a href="mailto:support@doggydoor.com">
            <p className='contactMethod'>
              support@doggydoor.com
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
