import React from 'react';
import './SectionSignUp.css';

export default function SectionSignUp() {
  return (
    <div className='sectionSignUp'>
      <div className='headingSignUp'>
        <h2>
          Become an author
        </h2>
        <span class="material-icons-outlined md-36 icon">edit</span>
      </div>

      <div className='sectionFormFields'>
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSeCHc04U0dpev5zpl1jq2LIRHaSs7CrTCXy_IraQtvGWV-Fiw/viewform?embedded=true" 
          width="100%" 
          height="1350px" 
          frameborder="0" 
          marginheight="0" 
          marginwidth="0">
            Loading…
        </iframe>
      </div>
    </div>
  );
}
