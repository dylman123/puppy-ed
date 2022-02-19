import React from 'react';
import { modules } from '../../assets/learner-modules/modules';
import { useParams } from "react-router-dom";

import './LearnerModulePage.css';

export default function LearnerModulePage() {
    let { slug } = useParams();

    const currentModule = modules.find(m => m.slug === slug);

    return (
        <div className='learnerModulePage'>
            <h2 className='moduleTitle'>{currentModule.title}</h2>
            <img className='moduleIcon' src={currentModule.imageFile} alt={currentModule.title}/>
            <p className='moduleDescription'>{currentModule.description}</p>
        </div>
    );
}