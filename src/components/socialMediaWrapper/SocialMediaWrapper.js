import React from 'react';
import './SocialMediaWrapper.css';

function SocialMediaWrapper() {
  return (
    <div className="social">
      <a
        rel="noopener noreferrer"
        className="in"
        href="https://www.linkedin.com/company/10621658/"
        target="_blank"
        title="Cloud Conformity LinkedIn profile"
      ></a>
      <a
        rel="noopener noreferrer"
        className="yt"
        href="https://www.youtube.com/channel/UCmZ9akNGr6kqEuDwgFgFDkQ"
        target="_blank"
        title="Cloud Conformity Youtube channel"
      ></a>
      <a
        rel="noopener noreferrer"
        className="tw"
        href="https://twitter.com/cloudconformity"
        target="_blank"
        title="Cloud Conformity Twitter feed"
      ></a>
      <a
        rel="noopener noreferrer"
        className="gh"
        href="https://github.com/cloudconformity/"
        target="_blank"
        title="Cloud Conformity Github page"
      ></a>
    </div>
  );
}

export default SocialMediaWrapper;
