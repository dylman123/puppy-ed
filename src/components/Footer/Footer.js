import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <a className='footerHeading' href='/'>
        Puppy Ed
      </a>
      <h4 className='heading4'>
        ANKC registered breeders educating the wider community.
      </h4>
      <a className='footerCta' href='/#join'>
        Become an author
      </a>
    </footer>
  );
}
