import React from 'react';
import useWindowDimensions, { WIDTH_VIEWPORT_SMALL } from '../../utils/viewport';
import './Logo.css';

export default function Logo() {
  const { height, width } = useWindowDimensions();
  const isMobileViewport = width < WIDTH_VIEWPORT_SMALL;

  return isMobileViewport ? (
    <div className='logo mobile-logo'>
      <span class="material-icons-outlined">school</span>
      <div>Puppy Ed</div>
    </div>
  ) : (
    <div className='logo'>
      <span class="material-icons-outlined">school</span>
      <div>Puppy Ed</div>
    </div>
  );
}
