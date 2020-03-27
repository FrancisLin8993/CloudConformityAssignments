import React from 'react';
import awsLogo from '../../assets/logo-square-aws.png';
import azureLogo from '../../assets/logo-square-azure.png';
import {
  AWS,
  AZURE,
  KNOWLEDGE_BASE_URL,
  transformProviderName
} from '../../utils/helpers';
import './ServiceProviderHeading.css';

class ServiceProviderHeading extends React.Component {
  renderImgAndLInk() {
    const providerName = transformProviderName(this.props.providerName);
    if (this.props.providerName === AWS) {
      return (
        <div>
          <img alt="Service coverage for Amazon Web Services" src={awsLogo} />
          <br />
          <a href={`${KNOWLEDGE_BASE_URL}${AWS}`} className="cta">
            View all {providerName} rules
          </a>
        </div>
      );
    } else if (this.props.providerName === AZURE) {
      return (
        <div>
          <img alt="Service coverage for Azure Services" src={azureLogo} />
          <br />
          <a href={`${KNOWLEDGE_BASE_URL}${AZURE}`} className="cta">
            View all {providerName} rules
          </a>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="heading">
        <h3>Service Coverage for</h3>
        {this.renderImgAndLInk()}
      </div>
    );
  }
}

export default ServiceProviderHeading;
