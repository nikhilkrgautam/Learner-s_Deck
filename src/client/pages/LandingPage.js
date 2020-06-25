import React, { Component } from 'react';
import { Row, Col, Text } from '@zeit-ui/react';

class LandingPage extends Component {

  componentDidMount() {

    // window.scrollTo(0, 0);
  }

  render() {
    return (
      <div style={{ margin: '30px auto', width: '60%' }}>
        <Row>
          <Text h1>eBuzzet</Text>
        </Row>
        <Row>
          <Text h3>Welcome to eBuzzet</Text>
        </Row>
        <Row gap={.8}>
          <Col>
            <Text>Some text</Text>
          </Col>
          <Col>
            <Text>Some more text</Text>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LandingPage;
