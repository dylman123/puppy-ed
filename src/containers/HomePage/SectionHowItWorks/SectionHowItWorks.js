import React from 'react';
import './SectionHowItWorks.css';

export default function SectionHowItWorks() {
  return (
    <div className='sectionHowItWorks'>
      <h2>
        How it works
      </h2>
      <div className='steps'>
        <div className='step'>
          <span class="material-icons-outlined md-36 icon icon1">edit</span>
          <h3 className='title'>
            Write your quiz
          </h3>
          <div className='description'>
            Write a learner module on your breed or a general dog ownership related topic. As the author, you will be credited for your work on the website.
          </div>
        </div>
        <div className='step'>
          <span class="material-icons-outlined md-36 icon icon2">send</span>
          <h3 className='title'>
            Share your quiz
          </h3>
          <div className='description'>
            Make your Learner Module accessible by posting it on your personal website, facebook page, Instagram page or anywhere you would like people to see it.
          </div>
        </div>
        <div className='step'>
          <span class="material-icons-outlined md-36 icon icon3">emoji_events</span>
          <h3 className='title'>
            Receive results
          </h3>
          <div className='description'>
            Receive the results of your potential puppy owners via an email.
          </div>
        </div>
      </div>
    </div>
  );
}
