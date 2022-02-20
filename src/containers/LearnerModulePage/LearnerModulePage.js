import React from 'react';
import { modules } from '../../assets/learner-modules/modules';
import { useParams } from "react-router-dom";

import './LearnerModulePage.css';

// The sectionHeadings apply to modules of category 'dog-breed'
const sectionHeadings = [
    {
        key: 'origin',
        label: 'Origin'
    },
    {
        key: 'fun-fact',
        label: 'Fun Fact'
    },
    {
        key: 'behaviour',
        label: 'Behaviour'
    },
    {
        key: 'health',
        label: 'Health'
    },
    {
        key: 'exercise',
        label: 'Exercise'
    },
    {
        key: 'training',
        label: 'Training'
    },
    {
        key: 'grooming',
        label: 'Grooming'
    },
]

export default function LearnerModulePage() {
    let { slug } = useParams();

    const currentModule = modules.find(m => m.slug === slug);

    const quizSections = currentModule.category === 'dog-breeds' ? (
        sectionHeadings.map(h => {
            return (
                <div className='section'>
                    <h3>{h.label}</h3>
                    <p>{currentModule.sections ? currentModule.sections[h.key] : null}</p>
                    <div className='comments'>Comments</div>
                </div>
            )
        })
    ) : null;

    return (
        <div className='learnerModulePage'>
            <h2 className='moduleTitle'>{currentModule.title}</h2>
            <img className='moduleIcon' src={currentModule.imageFile} alt={currentModule.title}/>
            <p className='moduleDescription'>{currentModule.description}</p>
            { quizSections }
        </div>
    );
}