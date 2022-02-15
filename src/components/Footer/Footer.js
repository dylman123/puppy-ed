import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <a className='footerHeading' href='/'>
        Puppy Ed
      </a>
      <p>
        ANKC registered breeders educating the wider community.
      </p>
      <a className='footerCta' href='/#join'>
        Become an author
      </a>
    </footer>
  );
}
