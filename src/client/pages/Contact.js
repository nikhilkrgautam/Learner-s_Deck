import React, { Component } from 'react';
import { Row, Col, Text } from '@zeit-ui/react';

class Contact extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Row justify="center" align="middle" style={{ minHeight: '900px' }}>
          <Col span={8}>
            <Row justify="center" align="middle" style={{ height: '100%' }}>
              <Col align="middle">
                <Text style={{color: '#4C2889', fontSize: '40px'}}>Nikhil Kumar Gautam</Text>
                <img width='60%' height='40%' style={{margin: '20px 30px', objectFit: 'cover', borderRadius: '20px', boxShadow: '5px 5px 10px 2px rgba(0,0,0,0.75)'}} src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/nikhil_pro_pic.jpg' />
                <Text style={{color: '#4C2889', fontSize: '20px'}}>Email: nikhilkumargautam01@gmail.com</Text>
                <Text style={{color: '#4C2889', fontSize: '20px'}}>Mobile: +91 8299549026</Text>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
          <Row justify="center" align="middle" style={{ height: '100%' }}>
            <Col align="middle">
              <Text style={{color: '#4C2889', fontSize: '40px'}}>Sahil Nare</Text>
              <img width='60%' height='40%' style={{margin: '20px 30px', objectFit: 'cover', borderRadius: '20px', boxShadow: '5px 5px 10px 2px rgba(0,0,0,0.75)'}} src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/sahil_pro_pic.jpg' />
              <Text style={{color: '#4C2889', fontSize: '20px'}}>Email: sahilnare78@gmail.com</Text>
              <Text style={{color: '#4C2889', fontSize: '20px'}}>Mobile: +91 8828095654</Text>
            </Col>
          </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contact;
