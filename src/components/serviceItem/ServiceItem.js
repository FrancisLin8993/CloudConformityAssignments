import React from 'react';
import Card from 'react-bootstrap/Card';
import { KNOWLEDGE_BASE_URL } from '../../utils/helpers';

function ServiceItem(props) {
  return (
    <Card border="light">
      <Card.Body>
        <Card.Link href={`${KNOWLEDGE_BASE_URL}${props.link}`}>
          <h3>{props.title}</h3>
        </Card.Link>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ServiceItem;
