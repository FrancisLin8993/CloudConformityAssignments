import React from 'react';
import './Announcement.css';
import trendMicroWhiteLogo from '../../assets/logo-trend-micro-white.svg';

function Announcement() {
  return (
    <div className="announcement">
      <a
        href="https://www.trendmicro.com/en_us/business/products/hybrid-cloud/cloud-one-conformity.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={trendMicroWhiteLogo} alt="Trend Micro" />
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <span className="hidden-sm">
          Trend Micro acquires Cloud Conformity and is now included in
        </span>
        Trend Micro Cloud One™
      </a>
    </div>
  );
}

export default Announcement;
