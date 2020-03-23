import React from 'react';
import awsLogo from '../../assets/logo-square-aws.png';
import azureLogo from '../../assets/logo-square-azure.png';
import conformityLogo from '../../assets/logo-square-trend-micro.png';
import { AWS, AZURE, KNOWLEDGE_BASE_URL } from '../../utils/helpers';

class ServiceProviderHeading extends React.Component {
  constructor(props) {
    super(props);
  }
  renderImgAndLInk() {
    if (this.props.providerName == AWS) {
      return (
        <React.Fragment>
          <img alt="Service coverage for Amazon Web Services" src={awsLogo} />
          <br />
          <a href={`${KNOWLEDGE_BASE_URL}${AWS}`}>
            View all {this.props.providerName} rules
          </a>
        </React.Fragment>
      );
    } else if (this.props.providerName == AZURE) {
      return (
        <React.Fragment>
          <img alt="Service coverage for Azure Services" src={azureLogo} />
          <br />
          <a href={`${KNOWLEDGE_BASE_URL}${AZURE}`}>
            View all {this.props.providerName} rules
          </a>
        </React.Fragment>
      );
    }
  }
  render() {
    return (
      <div>
        <h3>Service Coverage for</h3>
        {this.renderImgAndLInk()}
      </div>
    );
  }
}

export default ServiceProviderHeading;
