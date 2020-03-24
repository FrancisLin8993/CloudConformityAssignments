import React from 'react';
import './FooterButton.css';

function FooterButton() {
  return (
    <div className="grid-section footer-button">
      <div className="grid small3">
        <div className="wrp footer-v2"></div>
        <p>
          Whether your AWS exploration is just starting to take shape, you’re
          mid-way through a migration or you’re already running complex
          workloads in the cloud, Cloud Conformity offers full visibility of
          your infrastructure and provides continuous assurance it’s secure,
          optimized and compliant.
        </p>
        <br />
        <p>
          <a href="#chat">
            <strong>Chat with us</strong>
          </a>{' '}
          to set up your onboarding session and start a free trial.
        </p>
        <br />
        <a className="btn-cta" href="#chat">
          Let's Chat
        </a>
      </div>
    </div>
  );
}

export default FooterButton;
