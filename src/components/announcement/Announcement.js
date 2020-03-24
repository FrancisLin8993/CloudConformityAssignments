import React from 'react';
import './Announcement.css';
import trendMicroWhiteLogo from '../../assets/logo-trend-micro-white.svg';

function Announcement() {
  return (
    <div className="announcement">
      <a href={trendMicroWhiteLogo} target="_blank">
        <img src="../../assets/logo-trend-micro-white-3d6cf1e9f7d589290d7251b82a27dea28333c417bfad3b0e7f878f3fb8242a87.svg" />
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
