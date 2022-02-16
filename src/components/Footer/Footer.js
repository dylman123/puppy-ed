import React from 'react';
import HomeLink from '../HomeLink/HomeLink';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footerHeading'>
        <HomeLink />
      </div>
      <p>
        ANKC registered breeders educating the wider community.
      </p>

      <a className='ctaPrimary' href='/#join'>
        Become an author
      </a>
    </footer>
  );
}
