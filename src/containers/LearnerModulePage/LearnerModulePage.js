import React from 'react';
import { useParams } from 'react-router-dom';
import { modules } from '../../assets/learner-modules/modules';
import { CommentCount, DiscussionEmbed } from "disqus-react";
import { BASE_URL, ENV, DEV } from '../../config';

import usePageView from '../../utils/usePageView';

import './LearnerModulePage.css';
import AuthorCard from '../../components/AuthorCard/AuthorCard';

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
    usePageView()

    var { slug, tab } = useParams();
    
    const currentModule = modules.find(m => m.slug === slug);

    const navLinkStyle = h => h.key === tab ? 'navLinkSelected' : 'navLinkUnselected';

    const dynamicLinkId = h => h.key === tab ? 'tab' : '';

    const moduleHeading = (
        <div className='moduleHeading'>
            <h2 className='moduleTitle'>{currentModule.title}</h2>
            <img className='moduleIcon' src={currentModule.imageFile} alt={currentModule.title}/>
            {!currentModule.author ? null : AuthorCard(currentModule.author)}
        </div>
    );

    const moduleDescription = (
        <p className='moduleDescription'>{currentModule.description}</p>
    );

    const navLinks = (
        <div className='navLinks'>
            { sectionHeadings.map(h => {
                return (
                    <a
                      id={dynamicLinkId(h)}
                      className={navLinkStyle(h)} 
                      href={`/quiz/${slug}/${h.key}#tab`}
                    >
                      {h.label}
                    </a>
                )
            }) }
        </div>
    );

    const section = !currentModule.sections ? null : currentModule.sections[tab];

    const sectionHeading = sectionHeadings.filter(h => h.key === tab)[0];

    const disqusShortname = "puppyed";

    const disqusConfig = {
      url: `${BASE_URL}/quiz/${slug}/${tab}`,
      identifier: `${slug}-${tab}-${ENV}`,
      title: DEV ?
        `${sectionHeading.label} of the ${currentModule.title} (DEV)` :
        `${sectionHeading.label} of the ${currentModule.title}`,
    };

    const sectionInformation =  !section ? null : (
        <div className='sectionInformation'>

            {/* Section heading */}
            { !sectionHeading ? null : (
                <h3>{sectionHeading.label}</h3>
            )}

            {/* Section text */}
            { !section ? null : (
                <p className='informationText'>{section.text}</p>
            )}

            {/* Section source */}
            { section && section.source ? (
            
                // if source is an array of url strings
                Array.isArray(section.source) ? (
                    section.source.map(s => {
                        return (
                            <a rel="noopener noreferrer" target="_blank" href={s}>
                                <p className='sourceLink'>Source: {s}</p>
                            </a>
                        )
                    })
                ) : (
                // if source is a url string
                    <a rel="noopener noreferrer" target="_blank" href={section.source}>
                        <p className='sourceLink'>Source: {section.source}</p>
                    </a>
                )

            ) : null }

            {/* Section comment count */}
            <p className='commentCountContainer'>
                <CommentCount
                    shortname={disqusShortname}
                    config={disqusConfig}
                >
                    0 Comments
                </CommentCount>
            </p>


        </div>
    )

    const copyQuizUrl = () => {
        /* Copy the text inside the text field */
        const url = currentModule.quizUrl;
        navigator.clipboard.writeText(url).then(function() {
            /* Alert the copied text */
            alert("Quiz URL copied to clipboard");
          }, function() {
            /* Alert the error */
            alert("Did not copy correctly. Try again");
          });
    }

    const quizLinks = (
        <div className='quizLinksContainer'>
            <a className='quizLink' rel="noopener noreferrer" target="_blank" href={currentModule.quizUrl}>
                <p className='quizLinkText'>Do the quiz</p>
                <span class="material-icons-outlined md-36 icon">quiz</span>
            </a>
            <button className='quizLink' onClick={copyQuizUrl}>
                <p className='quizLinkText'>Share the quiz</p>
                <span class="material-icons-outlined md-36 icon">send</span>
            </button>
        </div>
    );

    const comments = (
        <div className='disqusComments'>
            <h3 className='disqusHeading'>Do you have anything to add, or anything you would change?</h3>
            <p className='disqusSubheading'>We want to hear from breeders like yourself.</p>
            <hr className='horizontalLine' />
            <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
            />
        </div>
    );

    return (
        <div className='learnerModulePage section'>
            { moduleHeading }
            { moduleDescription }
            { navLinks }
            { sectionInformation }
            { comments }
            { quizLinks }
        </div>
    );
}