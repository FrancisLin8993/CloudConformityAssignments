import React from 'react';
import './FooterLeft.css';
import Copyright from '../copyright/Copyright';
import SocialMediaWrapper from '../socialMediaWrapper/SocialMediaWrapper';

function FooterLeft() {
  return (
    <div className="left">
      <div className="partner">
        <img
          className="apn"
          alt="Amazon Web Services - Technology Partner, Security and Cloud Management Tools Competency"
          src="https://www.cloudconformity.com/assets/aws-badge-156cf61e0b1747e489436be0082f82f31c9780e0acb3c926f2a0a9a06bc21aff.png"
        ></img>
      </div>
      <div className="adress-social">
        <Copyright />
        <SocialMediaWrapper />
      </div>
    </div>
  );
}

export default FooterLeft;
