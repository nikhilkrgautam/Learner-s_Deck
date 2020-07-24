import React, { Component, Fragment } from 'react';
import { Row, Col, Text } from '@zeit-ui/react';
import Zoom from 'react-reveal/Zoom';

class Contact extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.ReactGA.set({ page: location.pathname });
    this.props.ReactGA.pageview(this.props.history.location.pathname);
  }

  render() {
    let contact;
    if(this.props.windowSize === 'sm' || this.props.windowSize === 'xs') {
      contact = (
        <Fragment>
          <Col span={22}>
            <Row justify="center" align="middle" style={{ height: '100%', margin: '80px 0 0' }}>
              <Zoom left>
              <Col align="middle">
                <Text style={{color: '#4C2889', fontSize: '30px'}}>Nikhil Kumar Gautam</Text>
                <img width='60%' height='40%' style={{margin: '20px 30px', objectFit: 'cover', borderRadius: '20px', boxShadow: '5px 5px 10px 2px rgba(0,0,0,0.75)'}} src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/nikhil_pro_pic.jpg' />
                <Text style={{color: '#4C2889', fontSize: '18px'}}>Email: nikhilkumargautam01@gmail.com</Text>
                <Text style={{color: '#4C2889', fontSize: '18px'}}>Mobile: +91 8299549026</Text>
              </Col>
              </Zoom>
            </Row>
            <Row justify="center" align="middle" style={{ height: '100%', margin: '0 0 50px' }}>
              <Zoom left>
              <Col align="middle">
                <Text style={{color: '#4C2889', fontSize: '30px'}}>Sahil Nare</Text>
                <img width='60%' height='40%' style={{margin: '20px 30px', objectFit: 'cover', borderRadius: '20px', boxShadow: '5px 5px 10px 2px rgba(0,0,0,0.75)'}} src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/sahil_pro_pic.jpg' />
                <Text style={{color: '#4C2889', fontSize: '18px'}}>Email: sahilnare78@gmail.com</Text>
                <Text style={{color: '#4C2889', fontSize: '18px'}}>Mobile: +91 8828095654</Text>
              </Col>
              </Zoom>
            </Row>
          </Col>
        </Fragment>
      );
    } else {
      contact = (
        <Fragment>
          <Col span={10}>
            <Zoom left>
            <Row justify="center" align="middle" style={{ height: '100%' }}>
              <Col align="middle">
                <Text style={{color: '#4C2889', fontSize: '30px'}}>Nikhil Kumar Gautam</Text>
                <img width='70%' height='40%' style={{margin: '20px 30px', maxWidth: '350px', objectFit: 'cover', borderRadius: '20px', boxShadow: '5px 5px 10px 2px rgba(0,0,0,0.75)'}} src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/nikhil_pro_pic.jpg' />
                <Text style={{color: '#4C2889', fontSize: '20px'}}>Email: nikhilkumargautam01@gmail.com</Text>
                <Text style={{color: '#4C2889', fontSize: '20px'}}>Mobile: +91 8299549026</Text>
              </Col>
            </Row>
            </Zoom>
          </Col>
          <Col span={10}>
            <Zoom left>
            <Row justify="center" align="middle" style={{ height: '100%' }}>
              <Col align="middle">
                <Text style={{color: '#4C2889', fontSize: '30px'}}>Sahil Nare</Text>
                <img width='70%' height='40%' style={{margin: '20px 30px', maxWidth: '350px', objectFit: 'cover', borderRadius: '20px', boxShadow: '5px 5px 10px 2px rgba(0,0,0,0.75)'}} src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/sahil_pro_pic.jpg' />
                <Text style={{color: '#4C2889', fontSize: '20px'}}>Email: sahilnare78@gmail.com</Text>
                <Text style={{color: '#4C2889', fontSize: '20px'}}>Mobile: +91 8828095654</Text>
              </Col>
            </Row>
            </Zoom>
          </Col>
        </Fragment>
      );
    }

    return (
      <div>
        <Row justify="center" align="middle" style={{ minHeight: '900px' }}>
          { contact }
        </Row>
      </div>
    );
  }
}

export default Contact;
