import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ContentHeader.css';
import { KNOWLEDGE_BASE_URL } from '../../utils/helpers';

function ContentHeader() {
  return (
    <div className="content-header grid-section">
      <div className="jumbotron-view">
        <Container fluid className="header">
          <Row className="grid article">
            <Col className="content-header-col">
              <h1>Knowledge Base</h1>
            </Col>
            <Col className="content-header-col">
              <p>
                Cloud Conformity is a continuous assurance tool that provides
                peace of mind for your cloud infrastructure, delivering over 520
                automated best practice checks.
              </p>
            </Col>
          </Row>
          <Row className="grid">
            <Col>
              <span>
                <a href={KNOWLEDGE_BASE_URL}>Knowledge Base</a>
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ContentHeader;
