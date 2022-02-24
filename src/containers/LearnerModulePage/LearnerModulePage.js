import React from 'react';
import { useParams } from 'react-router-dom';
import { modules } from '../../assets/learner-modules/modules';
import DiscourseForum from '../../components/DiscourseForum/DiscourseForum';
// import { useParams } from "react-router-dom";
// import useScript from '../../utils/useScript';

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

    let { slug, tab } = useParams();
    const currentModule = modules.find(m => m.slug === slug);

    const section = !currentModule.sections ? null : currentModule.sections[tab];
    const sectionHeading = sectionHeadings.filter(h => h.key === tab)[0];
    const quizSection =  !section ? null : (

        <div className='quizSection'>

            {/* Section heading */}
            { !sectionHeading ? null : (
                <h3>{sectionHeading.label}</h3>
            )}

            {/* Section text */}
            { !section ? null : (
                <p>{section.text}</p>
            )}

            {/* Section source */}
            { section && section.source ? (
                <a rel="noopener noreferrer" target="_blank" href={section.source}>
                    <p className='sourceLink'>Source: {section.source}</p>
                </a>
            ) : null }

            {/* Section comments */}
            { section && section.topicId ? (
                <div className='discourseComments'>
                    <DiscourseForum topicId={section.topicId} />
                </div>
            ) : null }

        </div>
    )

    return (
        <div className='learnerModulePage section'>
            <div className='moduleHeading'>
                <h2 className='moduleTitle'>{currentModule.title}</h2>
                <img className='moduleIcon' src={currentModule.imageFile} alt={currentModule.title}/>
            </div>
            
            <p className='moduleDescription'>{currentModule.description}</p>
            { quizSection }
            <a className='buttonPrimary quizLink' rel="noopener noreferrer" target="_blank" href={currentModule.quizUrl}>
                <span class="material-icons-outlined md-36 icon">visibility</span>
                <p className='quizLinkText'>View this quiz</p>
            </a>
        </div>
    );
}