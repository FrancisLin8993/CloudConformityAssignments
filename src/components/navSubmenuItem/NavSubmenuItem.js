import React from 'react';
import './NavSubmenuItem.css';
import {
  awsSolutionsDesc,
  azureSolutionsDesc,
  gcpSolutionsDesc
} from '../../utils/solutionItemsDesc';
import { AWS, AZURE, GCP } from '../../utils/helpers';
import awsProductLogo from '../../assets/logo-product-aws.svg';
import azureProductLogo from '../../assets/logo-product-azure.svg';
import gcpProductLogo from '../../assets/logo-product-gcp.svg';

class NavSubmenuItem extends React.Component {
  renderList() {
    const data = this.loadData(this.props.provider);
    const list = data.map(element => {
      return (
        <li key={data.indexOf(element)}>
          <a href={element.link}>{element.title}</a>
        </li>
      );
    });
    return list;
  }

  loadData = providerName => {
    if (providerName === AWS) {
      return awsSolutionsDesc;
    } else if (providerName === AZURE) {
      return azureSolutionsDesc;
    } else if (providerName === GCP) {
      return gcpSolutionsDesc;
    } else {
      return [];
    }
  };

  loadLogo = providerName => {
    if (providerName === AWS) {
      return awsProductLogo;
    } else if (providerName === AZURE) {
      return azureProductLogo;
    } else if (providerName === GCP) {
      return gcpProductLogo;
    } else {
      return;
    }
  };

  render() {
    const data = this.loadData(this.props.provider);
    let dataLink = '';
    if (data.length != 0) {
      dataLink = data[0].link;
    }
    return (
      <div className={`submenu-item ${this.props.provider}`}>
        <div className="logo-holder">
          <a href={dataLink} className="logo-href-wrapper">
            <img
              className="img-logo"
              src={this.loadLogo(this.props.provider)}
            />
          </a>
        </div>
        <ul className="intro-holder">{this.renderList()}</ul>
      </div>
    );
  }
}

export default NavSubmenuItem;
