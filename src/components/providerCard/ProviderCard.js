import React from 'react';
import Card from 'react-bootstrap/Card';
import { AWS, AZURE, CONFORMITY } from '../../utils/helpers';
import awsLogo from '../../assets/logo-square-aws.png';
import azureLogo from '../../assets/logo-square-azure.png';
import conformityLogo from '../../assets/logo-square-trend-micro.png';

class ProviderCard extends React.Component {
  isProviderConformity() {
    return this.props.provider === CONFORMITY;
  }

  renderImg() {
    if (this.props.provider === AWS) {
      return <Card.Img variant="top" src={awsLogo} />;
    } else if (this.props.provider === AZURE) {
      return <Card.Img variant="top" src={azureLogo} />;
    } else if (this.props.provider === CONFORMITY) {
      return <Card.Img variant="top" src={conformityLogo} />;
    }
  }

  renderButton() {
    if (this.isProviderConformity()) {
      return (
        <Card.Link className="cta" href="#">
          Cloud Conformity Best Practices
        </Card.Link>
      );
    } else {
      return (
        <Card.Link
          className="cta"
          href="#"
        >{`${this.props.provider} supported Services`}</Card.Link>
      );
    }
  }

  renderLinks() {
    if (!this.isProviderConformity()) {
      return (
        <Card.Link href="#">View all {this.props.provider} rules</Card.Link>
      );
    }
  }

  render() {
    return (
      <Card border="light">
        {this.renderImg()}
        <Card.Body>
          {this.renderButton()}
          <br />

          {this.renderLinks()}
        </Card.Body>
      </Card>
    );
  }
}

export default ProviderCard;
