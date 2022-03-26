import React from 'react';
import { modules } from '../../assets/learner-modules/modules';
import AuthorCard from '../../components/AuthorCard/AuthorCard';

import usePageView from '../../utils/usePageView';

import './LearningCentrePage.css';

export default function LearningCentrePage() {
  usePageView('LearningCentrePage')

  const mapModuleToCard = m => {
    return (
      <a className='moduleCard' href={`/quiz/${m.slug}/origin`}>
        <h3 className='cardTitle'>{m.title}</h3>
        <div className='cardIconWrapper'>
          <img src={m.imageFile} className='cardIcon' alt={m.title}/>
        </div>
        <p className='cardDescription'>
          {m.description}
        </p>
        {!m.author ? null : AuthorCard(m.author)}
      </a>
    )
  }

  return (
      <div className='learningCentrePage'>

        {/* <h2 className='titleGettingStarted'>Getting Started</h2> */}
        {/* <div className='moduleCards'>
          {modules.filter(m => m.category === 'getting-started').map(mapModuleToCard)}
        </div> */}

        <h2 className='titleDogBreeds'>Dog Breeds</h2>
        <div className='moduleCards'>
          {modules.filter(m => m.category === 'dog-breeds').map(mapModuleToCard)}
        </div>

        {/* <h2 className='titleBasics'>Basics</h2> */}
        {/* <div className='moduleCards'>
          {modules.filter(m => m.category === 'basics').map(mapModuleToCard)}
        </div> */}

      </div>
  );
}
