import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className='App-header'>
      <a className='linkHomePage' href='/'>
        Puppy Ed
      </a>
      <div className='spacer' />
      <a className='linkModulesPage' href ='/learning-centre'>
        Learning Centre
      </a>
      <a className='linkHelpPage' href='/help'>
        Help
      </a>
    </header>
  );
}
