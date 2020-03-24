import React from 'react';
import './ContentHeader.css';
import { KNOWLEDGE_BASE_URL } from '../../utils/helpers';

function ContentHeader() {
  return (
    <div className="content-header grid-section">
      <div className="table-view">
        <div className="header">
          <div className="article">
            <div className="grid">
              <div className="column">
                <h1>Knowledge Base</h1>
              </div>
              <div className="column">
                <p>
                  Cloud Conformity is a continuous assurance tool that provides
                  peace of mind for your cloud infrastructure, delivering over
                  520 automated best practice checks.
                </p>
              </div>
            </div>
          </div>
          <div className="sitemap">
            <div className="grid">
              <div className="wrp">
                <div className="nav">
                  <span>
                    <a href={KNOWLEDGE_BASE_URL}>Knowledge Base</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentHeader;
