import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';

export default function Header() {
  return (
    <header className='App-header'>
      <a className='linkHomePage buttonPrimary' href='/'>
        <Logo />
      </a>
      <div className='spacer' />
      <a className='linkModulesPage buttonPrimary' href ='/learning-centre'>
        Learning Centre
      </a>
      <a className='linkHelpPage buttonPrimary' href='/help'>
        Help
      </a>
    </header>
  );
}
