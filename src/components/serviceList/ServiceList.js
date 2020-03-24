import React from 'react';
import ServiceProviderHeading from '../serviceProviderHeading/ServiceProviderHeading';
import cloudConfomrityInstance from '../../apis/cloudConformityApi';
import {
  filterAttributes,
  AWS,
  AZURE,
  KNOWLEDGE_BASE_URL,
  generateLinks,
  addLinkAttributeToArray
} from '../../utils/helpers';
import {
  awsServicesDescriptions,
  azureServiceDescriptions
} from '../../utils/serviceItemsDesc';
import { CLOUD_CONFORMITY_BASE_URL, PROXY_URL } from '../../apis/apiUtils';
import './ServiceList.css';

// Render a serviceList.
// props of this component could be aws or azure.
class ServiceList extends React.Component {
  state = { ruleInfoArray: [] };
  componentDidMount() {
    // Concat the url of the proxy and the backend api
    fetch(`${PROXY_URL}${CLOUD_CONFORMITY_BASE_URL}services`, {
      headers: cloudConfomrityInstance
    })
      .then(response => response.json())
      .then(responseData => {
        //Generate the corresponding link for each item from the response
        const linksArray = generateLinks(filterAttributes(responseData));
        console.log(linksArray);
        // Load the content into an array
        // add the corresponding link to each item of the array
        const rulesInfo = this.loadData(this.props.providerName);
        if (rulesInfo) {
          const resultArray = addLinkAttributeToArray(rulesInfo, linksArray);
          this.setState({ ruleInfoArray: resultArray });
        }
      });
  }

  // Render li element of an unordered list
  renderListItem = (item, index) => {
    return (
      <li className="service-link" key={index}>
        <h3>
          <a href={`${KNOWLEDGE_BASE_URL}${item.link}`}>{item.title}</a>
        </h3>
        <p>{item.description}</p>
      </li>
    );
  };

  renderList(data) {
    return data.map(item => this.renderListItem(item, data.indexOf(item)));
  }

  // Load the content to be displayed from the external files
  loadData = providerName => {
    if (providerName === AWS) {
      return awsServicesDescriptions;
    } else if (providerName === AZURE) {
      return azureServiceDescriptions;
    } else {
      return [];
    }
  };

  render() {
    const data = this.loadData(this.props.providerName);
    return (
      <div className="grid copy provider">
        <ServiceProviderHeading {...this.props} />
        <ul className="service-list">{this.renderList(data)}</ul>
      </div>
    );
  }
}

export default ServiceList;
