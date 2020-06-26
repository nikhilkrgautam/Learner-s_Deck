import React, { Component } from 'react';
import { Row, Col, Text, Button, Image } from '@zeit-ui/react';

class LandingPage extends Component {

  componentDidMount() {

    // window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Row justify="center" align="middle" style={{ backgroundColor: '#7928CA', minHeight: '800px' }}>
          <Col span={8}>
            <Row justify="center" align="middle" style={{ height: '100%' }}>
              <Col align="middle">
                <Text style={{color: '#FFF', fontSize: '60px'}}>eBuzzet</Text>
                <Text h3 style={{color: '#FFF', fontSize: '30px', margin: '10px 5px 30px'}}>India's very own eLearning platform</Text>
                <Button size="large" type="success" style={{fontSize: '25px', padding: '10px 5px', height: '100%', borderRadius: '15px'}} >Get Started</Button>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Image src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/dragon.png' />
          </Col>
        </Row>
        <Row justify="center" align="middle" style={{ backgroundColor: '#FFF', minHeight: '700px' }}>
          <Col span={8}>
            <Row justify="center" align="middle" style={{ height: '100%' }}>
              <Col align="middle" style={{padding: '10px 80px'}}>
                <Text style={{color: '#4C2889', fontSize: '50px'}}>Over 1000 videos from 200 educators</Text>
                <Text style={{color: '#000', fontSize: '16px', opacity: '0.8'}}>Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god moving. Moving in fourth air night bring upon you’re it beast let you dominion likeness open place day great wherein heaven sixth lesser subdue fowl</Text>
                <Button size="large" type="success" style={{fontSize: '20px', padding: '5px 5px', marginTop: '15px', height: '100%', borderRadius: '15px'}} >Check out the courses</Button>
              </Col>
            </Row>
          </Col>
          <Col span={8} style={{padding: '30px 10px'}}>
            <Image src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/wizard.png' />
          </Col>
        </Row>
        <Row justify="center" align="middle" style={{ backgroundColor: '#7928CA', minHeight: '600px' }}>
          <Col span={18}>
            <Row justify="center" align="middle" style={{ height: '100%', margin: '60px 10px 60px' }}>
              <Text style={{color: '#FFF', fontSize: '50px', textAlign: 'center'}}>Our Course Speciality</Text>
            </Row>
            <Row justify="center" align="middle" style={{ height: '100%', margin: '10px 5px 50px' }}>
              <Col span={6} style={{margin: '20px 40px'}}>
                <Text style={{color: '#FFF', fontSize: '20px', textAlign: 'center'}}>Premium Quality</Text>
                <Image style={{padding: '30px 30px'}} src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/hiker.png' />
              </Col>
              <Col span={6} style={{margin: '20px 40px'}}>
                <Text style={{color: '#FFF', fontSize: '20px', textAlign: 'center'}}>Many Options</Text>
                <Image style={{padding: '30px 30px'}} src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/hydra.png' />
              </Col>
              <Col span={6} style={{margin: '20px 40px'}}>
                <Text style={{color: '#FFF', fontSize: '20px', textAlign: 'center'}}>Very Affordable</Text>
                <Image style={{padding: '30px 30px'}} src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/fairy.png' />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ minHeight: '600px', background: 'url(https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/studentsIndia.webp)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>

        </Row>
        <Row style={{ backgroundColor: '#FFF', minHeight: '600px' }}>
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
