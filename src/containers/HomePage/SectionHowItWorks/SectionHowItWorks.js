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
          <span class="material-icons-outlined md-36 icon icon1">visibility</span>
          <h3 className='title'>
            View quizzes
          </h3>
          <p className='description'>
            Review the existing quizzes about purebred dogs on this website. Comment to leave your feedback.
          </p>
        </div>
        <div className='step'>
          <span class="material-icons-outlined md-36 icon icon2">edit</span>
          <h3 className='title'>
            Write your own quiz
          </h3>
          <p className='description'>
            Write a quiz on your breed or a general dog ownership related topic. As the author, you will be credited for your work on the website.
          </p>
        </div>
        <div className='step'>
          <span class="material-icons-outlined md-36 icon icon3">send</span>
          <h3 className='title'>
            Share your quiz
          </h3>
          <p className='description'>
            Make your quiz accessible by posting it on your personal website, Facebook page, Instagram page or anywhere you would like people to see it.
          </p>
        </div>
        <div className='step'>
          <span class="material-icons-outlined md-36 icon icon4">emoji_events</span>
          <h3 className='title'>
            Receive results
          </h3>
          <p className='description'>
            Receive the quiz results of your potential puppy owners via an email.
          </p>
        </div>
      </div>
    </div>
  );
}
