import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from <br />
            Find your residence soon
          </span>
					<button className='button'>
						<a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">Get Started</a>
					</button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
