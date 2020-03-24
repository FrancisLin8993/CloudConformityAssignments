import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ContentHeader.css';
import { KNOWLEDGE_BASE_URL } from '../../utils/helpers';

function ContentHeader() {
  return (
    <div>
      <Jumbotron fluid className="ContentHeader">
        <Container fluid className="content-header-wrapper">
          <Row className="grid">
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
      </Jumbotron>
    </div>
  );
}

export default ContentHeader;
