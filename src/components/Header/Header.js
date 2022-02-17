import React from 'react';
import useWindowDimensions, { WIDTH_VIEWPORT_SMALL } from '../../utils/viewport';
import Logo from '../Logo/Logo';
import './Header.css';

export default function Header() {
  const { width } = useWindowDimensions();
  const isMobileViewport = width < WIDTH_VIEWPORT_SMALL;

  return isMobileViewport ? (
    <header className='App-header mobile-header'>
      <div className='linkHomePage'>
        <a className='linkStyle' href='/'><Logo /></a>
      </div>
      <div className='linkModulesPage'>
        <a className='linkStyle' href ='/learning-centre'>Learning Centre</a>
      </div>
      <div className='linkHelpPage' >
        <a className='linkStyle' href='/help'>Help</a>
      </div>
    </header>
  ) : (
    <header className='App-header'>
      <a className='linkHomePage buttonPrimary linkStyle' href='/'>
        <Logo />
      </a>
      <div className='spacer' />
      <a className='linkModulesPage buttonPrimary linkStyle' href ='/learning-centre'>
        Learning Centre
      </a>
      <a className='linkHelpPage buttonPrimary linkStyle' href='/help'>
        Help
      </a>
    </header>
  );
}
