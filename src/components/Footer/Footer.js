import React from 'react';
import Logo from '../Logo/Logo';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <a className='footerHeading' href='/'>
        <Logo />
      </a>
      <p>
        ANKC registered breeders educating the wider community.
      </p>

      <a className='ctaPrimary' href='/#join'>
        Become an author
      </a>
    </footer>
  );
}
