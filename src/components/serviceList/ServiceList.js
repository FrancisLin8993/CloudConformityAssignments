import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cloudConfomrityInstance from '../../apis/cloudConformityApi';
import {
  splitArray,
  filterAttributes,
  AWS,
  AZURE,
  generateLinks,
  addLinkAttributeToArray
} from '../../utils/helpers';
import {
  awsServicesDescriptions,
  azureServiceDescriptions
} from '../../utils/serviceItemsDesc';
import ServiceItem from '../serviceItem/ServiceItem';
import ServiceProviderHeading from '../serviceProviderHeading/ServiceProviderHeading';
import { CLOUD_CONFORMITY_BASE_URL, PROXY_URL } from '../../apis/apiUtils';

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
      .then(data => {
        //Generate the corresponding link for each item from the response
        const linksArray = generateLinks(filterAttributes(data));
        // Load the content into an array
        // Split the array into smaller arrays
        // each small array contains two items
        const splittedArray = splitArray(
          addLinkAttributeToArray(
            this.loadData(this.props.providerName),
            linksArray
          )
        );
        this.setState({ ruleInfoArray: splittedArray });
      });
  }

  // Render a row. Each row contains two ServiceItems.
  renderRow = (rowItem, index) => {
    return rowItem.length % 2 == 0 ? (
      <Row key={index}>
        <Col>
          <ServiceItem
            title={rowItem[0].title}
            description={rowItem[0].description}
            link={rowItem[0].link}
          />
        </Col>
        <Col>
          <ServiceItem
            title={rowItem[1].title}
            description={rowItem[1].description}
            link={rowItem[1].link}
          />
        </Col>
      </Row>
    ) : (
      <Row key={index}>
        <Col>
          <ServiceItem
            title={rowItem[0].title}
            description={rowItem[0].description}
            link={rowItem[0].link}
          />
        </Col>
        <Col></Col>
      </Row>
    );
  };

  // Load the content to be displayed from the external files
  loadData = providerName => {
    if (providerName === AWS) {
      return awsServicesDescriptions;
    } else if (providerName === AZURE) {
      return azureServiceDescriptions;
    }
  };

  render() {
    const data = this.loadData(this.props.providerName);
    const splittedArray = splitArray(data);
    const serviceItemList = splittedArray.map(rowItem =>
      this.renderRow(rowItem, data.indexOf(rowItem[0]))
    );
    return (
      <div className="grid copy provider">
        <ServiceProviderHeading {...this.props} />
        <Container className="service-list">{serviceItemList}</Container>
      </div>
    );
  }
}

export default ServiceList;
