import React, { Component } from 'react';
import { Row, Col, Text, Button, Image, Link } from '@zeit-ui/react';
import { Link as RouterLink } from 'react-router-dom';

class LandingPage extends Component {

  componentDidMount() {

    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Row justify="center" align="middle" style={{ backgroundColor: '#7928CA', minHeight: '800px' }}>
          <Col span={8}>
            <Row justify="center" align="middle" style={{ height: '100%' }}>
              <Col align="middle">
                <Text style={{color: '#FFF', fontSize: '60px'}}>eBuzzet</Text>
                <Text h3 style={{color: '#FFF', fontSize: '32px', margin: '10px 5px'}}>India's very own eLearning platform</Text>
                <Text h3 style={{color: '#FFF', fontSize: '26px', margin: '10px 5px 40px'}}>For Classes 9 to 12</Text>
                <RouterLink to='/joinus'>
                  <Link>
                    <Button size="large" type="success" style={{fontSize: '25px', padding: '10px 5px', height: '100%', borderRadius: '15px'}} >Get Started</Button>
                  </Link>
                </RouterLink>
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
              <Col align="middle" style={{padding: '10px 60px'}}>
                <Text style={{color: '#4C2889', fontSize: '50px', lineHeight: '55px'}}>No Ads, No Payments,</Text>
                <Text style={{color: '#4C2889', fontSize: '50px', lineHeight: '55px'}}>Learn for FREE</Text>
                <Text style={{color: '#000', fontSize: '24px', opacity: '0.8'}}>Don't trust us? Try in once &amp; decide yourself</Text>
                <RouterLink to='/joinus'>
                  <Link>
                    <Button size="large" type="success" style={{fontSize: '20px', padding: '5px 5px', marginTop: '15px', height: '100%', borderRadius: '15px'}} >Check out the courses</Button>
                  </Link>
                </RouterLink>
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
                <Text style={{color: '#FFF', fontSize: '20px', textAlign: 'center'}}>Verified Teachers</Text>
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

          </Col>
          <Col>

          </Col>
        </Row>
      </div>
    );
  }
}

export default LandingPage;
