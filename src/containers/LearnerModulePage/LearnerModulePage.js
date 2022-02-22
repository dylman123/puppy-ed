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
    const hasSectionContent = !!currentModule.sections;

    const quizSections = currentModule.category === 'dog-breeds' ? (
        sectionHeadings.map(h => {
            const section = hasSectionContent ? currentModule.sections[h.key] : null;
            return (
                <div className='quizSection'>

                    {/* Section heading */}
                    <h3>{h.label}</h3>

                    {/* Section text */}
                    { section ? (
                        <p>{section.text}</p>
                    ) : null }

                    {/* Section source */}
                    { section && section.source ? (
                        <a rel="noopener noreferrer" target="_blank" href={section.source}>
                            <p className='sourceLink'>Source: {section.source}</p>
                        </a>
                    ) : null }

                    {/* Section comments */}
                    <div className='comments'>Comments</div>
                </div>
            )
        })
    ) : null;

    return (
        <div className='learnerModulePage section'>
            <div className='moduleHeading'>
                <h2 className='moduleTitle'>{currentModule.title}</h2>
                <img className='moduleIcon' src={currentModule.imageFile} alt={currentModule.title}/>
            </div>
            
            <p className='moduleDescription'>{currentModule.description}</p>
            { quizSections }
            <a className='buttonPrimary quizLink' rel="noopener noreferrer" target="_blank" href={currentModule.quizUrl}>
                <span class="material-icons-outlined md-36 icon">visibility</span>
                <p className='quizLinkText'>View this quiz</p>
            </a>
        </div>
    );
}