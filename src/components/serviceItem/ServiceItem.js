import React from 'react';
import Card from 'react-bootstrap/Card';
import { KNOWLEDGE_BASE_URL } from '../../utils/helpers';

function ServiceItem(props) {
  return (
    <Card border="light" className="service-link">
      <Card.Body>
        <h3>
          <Card.Link
            className="service-item-link"
            href={`${KNOWLEDGE_BASE_URL}${props.link}`}
          >
            {props.title}
          </Card.Link>
        </h3>
        <Card.Text className="service-item-text">{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ServiceItem;
