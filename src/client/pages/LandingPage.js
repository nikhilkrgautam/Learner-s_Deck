import React, { Component } from 'react';
import { Row, Col, Text } from '@zeit-ui/react';

class LandingPage extends Component {

  componentDidMount() {

    // window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Row justify="center" align="middle" style={{ backgroundColor: '#0A183D', minHeight: '700px' }}>
          <Col span={8}>
            <Row justify="center" align="middle" style={{ height: '100%' }}>
              <Col align="middle">
                <Text h1 style={{color: '#FFF'}}>eBuzzet</Text><br/>
                <Text h3 style={{color: '#FFF'}}>Welcome to eBuzzet</Text>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <img src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/dragon.png' />
          </Col>
        </Row>
        <Row gap={.8} style={{ backgroundColor: '#FFF', minHeight: '400px' }}>
          <Col>
            <Text>Some text</Text>
          </Col>
          <Col>
            <Text>Some more text</Text>
          </Col>
        </Row>
        <Row style={{ backgroundColor: '#0A183D', minHeight: '600px' }}>
          <Col>
            <Text>Some text</Text>
          </Col>
          <Col>
            <Text>Some more text</Text>
          </Col>
        </Row>
        <Row gap={.8} style={{ backgroundColor: '#FFF', minHeight: '400px' }}>
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
