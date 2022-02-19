import React from 'react';
import { modules } from '../../assets/learner-modules/modules';

import './LearningCentrePage.css';

export default function LearningCentrePage() {

  const mapModuleToCard = m => {
    return (
      <a className='moduleCard' href={`/module/${m.slug}`}>
        <h3 className='cardTitle'>{m.title}</h3>
        <div className='cardIconWrapper'>
          <img src={m.imageFile} className='cardIcon' />
        </div>
        <p className='cardDescription'>
          {m.description}
        </p>
        {/* {!m.author ? null : authorCard(m.author)} */}
      </a>
    )
  }

  return (
      <div className='learningCentrePage'>

        <h2 className='titleGettingStarted'>Getting Started</h2>
        <div className='moduleCards'>
          {modules.filter(m => m.section === 'getting-started').map(mapModuleToCard)}
        </div>

        <h2 className='titleBasics'>Basics</h2>
        <div className='moduleCards'>
          {modules.filter(m => m.section === 'basics').map(mapModuleToCard)}
        </div>

        <h2 className='titleDogBreeds'>Dog Breeds</h2>
        <div className='moduleCards'>
          {modules.filter(m => m.section === 'dog-breeds').map(mapModuleToCard)}
        </div>
      </div>
  );
}
