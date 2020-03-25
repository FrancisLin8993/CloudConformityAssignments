import React from 'react';
import './FooterRight.css';

function FooterRight() {
  return (
    <div className="right">
      <div className="footer-nav">
        <div>Products</div>

        <span>
          <a href="/solutions/aws/security-compliance.html">
            Cloud Conformity for AWS
          </a>
        </span>

        <span>
          <a href="/solutions/azure/security-compliance.html">
            Cloud Conformity for Azure
          </a>
        </span>

        <span>
          <a href="/solutions/google-cloud/security-compliance.html">
            Cloud Conformity for Google Cloud
          </a>
        </span>

        <span>
          <a href="/solutions/aws/auto-remediation.html">Auto-Remediation</a>
        </span>

        <span>
          <a href="/pricing.html">Pricing</a>
        </span>
      </div>
      <div className="footer-nav">
        <div>Help</div>
        <span>
          <a id="chat-link" href="#chat">
            Start a Conversation
          </a>
        </span>

        <span>
          <a href="/frequently-asked-questions.html">
            Frequently Asked Questions
          </a>
        </span>

        <span>
          <a href="/help/">Self Help</a>
        </span>

        <span>
          <a href="/knowledge-base/">Knowledge Base</a>
        </span>

        <span>
          <a href="https://github.com/cloudconformity/documentation-api">
            API Documentation
          </a>
        </span>
      </div>
      <div className="footer-nav">
        <div>Company</div>

        <span>
          <a href="/about.html">About Us</a>
        </span>

        <span>
          <a href="/careers.html">Careers</a>
        </span>

        <span>
          <a href="/about.html#contact">Contact Us</a>
        </span>

        <span>
          <a href="/customers">Customers</a>
        </span>
      </div>
      <div className="footer-nav">
        <div>Compliance Standards</div>

        <span>
          <a href="/compliance/CIS/">CIS</a>
        </span>

        <span>
          <a href="/compliance/GDPR/">GDPR</a>
        </span>

        <span>
          <a href="/compliance/HIPAA/">HIPAA</a>
        </span>

        <span>
          <a href="/compliance/PCI-DSS/">PCI-DSS</a>
        </span>

        <span>
          <a href="/compliance/NIST/">NIST 800-53 (Rev.4) </a>
        </span>
      </div>
      <div className="footer-nav">
        <div>Privacy and Protection</div>

        <span>
          <a href="/terms-and-conditions.html">Terms and Conditions</a>
        </span>

        <span>
          <a href="/privacy-policy.html">Privacy Policy</a>
        </span>

        <span>
          <a href="/saas-agreement.html">SaaS Agreement</a>
        </span>

        <span>
          <a href="/commitment-to-gdpr.html">Commitment to GDPR</a>
        </span>

        <span>
          <a href="/responsible-disclosure.html">
            Report a Security Vulnerability
          </a>
        </span>
      </div>
    </div>
  );
}

export default FooterRight;
