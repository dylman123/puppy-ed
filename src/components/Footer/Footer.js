import React from 'react';
import Logo from '../Logo/Logo';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footerLinkContainer'>
        <a className='footerHeading' href='/'>
          <Logo />
        </a>
        <p>
          ANKC registered breeders educating the wider community.
        </p>
        <div className='ctaFooter'>
          <a className='ctaPrimary' href='/#join'>
            Become an author
          </a>
        </div>
      </div>
      <div className='footerLinkContainer'>
        <a className='footerLink' href ='/learning-centre'>
          <p>Learning Centre</p>
        </a>
        <a className='footerLink' href='/help'>
          <p>Help</p>
        </a>
      </div>

    </footer>
  );
}
