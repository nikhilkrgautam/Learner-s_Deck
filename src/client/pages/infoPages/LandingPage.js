import React, { Component, Fragment } from 'react';
import { Row, Col, Text, Button, Image, Link } from '@zeit-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';

class LandingPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  // const breakpoints: ZeitUIThemesBreakpoints = {
  //   xs: { min: '0', max: '650px' },
  //   sm: { min: '650px', max: '900px' },
  //   md: { min: '900px', max: '1280px' },
  //   lg: { min: '1280px', max: '1920px' },
  //   xl: { min: '1920px', max: '10000px' },
  // }

  render() {

    let courseSpeciality, mainHeading, quoteSection, learnFree;
    // Course Speciality
    if(this.props.windowSize === 'sm' || this.props.windowSize === 'xs') {
      courseSpeciality = (
        <Fragment>
          <Row justify="center" align="middle" style={{ backgroundColor: '#7928CA', minHeight: '850px' }}>
            <Col span={24}>
              <Row justify="center" align="middle" style={{ height: '100%', margin: '40px 10px 0px' }}>
                <Text style={{color: '#FFF', fontSize: '35px', textAlign: 'center'}}>Our Course Speciality</Text>
              </Row>
              <Row justify="center" align="middle" style={{ height: '100%', margin: '10px 5px 30px' }}>
                <Fade right>
                <Col align='middle'>
                  <Text style={{color: '#FFF', fontSize: '25px', textAlign: 'center'}}>Premium Quality</Text>
                  <img width='100%' height='350px' style={{padding: '20px 20px', objectFit: 'cover', display: 'block'}} src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/premiumQuality.jpg' />
                </Col>
                </Fade>
              </Row>
              <Row justify="center" align="middle" style={{ height: '100%', margin: '10px 5px 30px' }}>
                <Fade right>
                <Col align='middle'>
                  <Text style={{color: '#FFF', fontSize: '25px', textAlign: 'center'}}>Verified Teachers</Text>
                  <img width='100%' height='350px' style={{padding: '20px 20px', objectFit: 'cover', display: 'block'}} src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/verifiedTeacher.jpg' />
                </Col>
                </Fade>
              </Row>
              <Row justify="center" align="middle" style={{ height: '100%', margin: '10px 5px 40px' }}>
                <Fade right>
                <Col align='middle'>
                  <Text style={{color: '#FFF', fontSize: '25px', textAlign: 'center'}}>Interactive Learning</Text>
                  <img width='100%' height='350px' style={{padding: '20px 20px', objectFit: 'cover', display: 'block'}} src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/interactive.jpg' />
                </Col>
                </Fade>
              </Row>
            </Col>
          </Row>
        </Fragment>
      );
    } else {
      courseSpeciality = (
        <Fragment>
          <Row justify="center" align="middle" style={{ backgroundColor: '#7928CA', minHeight: '850px' }}>
            <Col span={20}>
              <Row justify="center" align="middle" style={{ height: '100%', margin: '80px 10px 60px' }}>
                <Text style={{color: '#FFF', fontSize: '50px', textAlign: 'center'}}>Our Course Speciality</Text>
              </Row>
              <Fade right>
              <Row justify="center" align="middle" style={{ height: '100%', margin: '10px 5px 80px' }}>
                <Col span={8} style={{margin: '20px 20px'}}>
                  <Text style={{color: '#FFF', fontSize: '30px', textAlign: 'center'}}>Premium Quality</Text>
                  <img width='100%' height='400px' style={{padding: '20px 20px', objectFit: 'cover'}} src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/premiumQuality.jpg' />
                </Col>

                <Col span={8} style={{margin: '20px 20px'}}>
                  <Text style={{color: '#FFF', fontSize: '30px', textAlign: 'center'}}>Verified Teachers</Text>
                  <img width='100%' height='400px' style={{padding: '20px 20px', objectFit: 'cover'}} src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/verifiedTeacher.jpg' />
                </Col>

                <Col span={8} style={{margin: '20px 20px'}}>
                  <Text style={{color: '#FFF', fontSize: '30px', textAlign: 'center'}}>Interactive Learning</Text>
                  <img width='100%' height='400px' style={{padding: '20px 20px', objectFit: 'cover'}} src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/interactive.jpg' />
                </Col>
              </Row>
              </Fade>
            </Col>
          </Row>
        </Fragment>
      );
    }

    // Page Heading
    if(this.props.windowSize === 'sm' || this.props.windowSize === 'xs') {
      mainHeading = (
        <Fragment>
          <Row justify="center" align="middle" style={{ backgroundColor: '#7928CA', minHeight: '700px' }}>
            <Col align='middle'>
              <Row justify="center" align="middle" style={{ height: '100%' }}>
                <HeadShake>
                <Col align="middle">
                  <Text style={{color: '#FFF', fontSize: '50px'}}>eBuzzet</Text>
                  <img height='200px' src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/dragon.png' />
                  <Text h3 style={{color: '#FFF', fontSize: '26px', margin: '10px 5px'}}>India's very own eLearning platform</Text>
                  <Text h3 style={{color: '#FFF', fontSize: '22px', margin: '10px 5px 40px'}}>For Classes 1 to 12</Text>
                  <RouterLink to='/signup'>
                    <Link>
                      <Button type="success" style={{fontSize: '20px', padding: '10px 5px', height: '100%', borderRadius: '15px'}} >Get Started</Button>
                    </Link>
                  </RouterLink>
                </Col>
                </HeadShake>
              </Row>
            </Col>
          </Row>
        </Fragment>
      );
    } else {
      mainHeading = (
        <Fragment>
          <Row justify="center" align="middle" style={{ backgroundColor: '#7928CA', minHeight: '850px' }}>
            <Col span={8}>
              <Row justify="center" align="middle" style={{ height: '100%' }}>
                <HeadShake>
                <Col align="middle">
                  <Text style={{color: '#FFF', fontSize: '60px'}}>eBuzzet</Text>
                  <Text h3 style={{color: '#FFF', fontSize: '32px', margin: '10px 5px'}}>India's very own eLearning platform</Text>
                  <Text h3 style={{color: '#FFF', fontSize: '26px', margin: '10px 5px 40px'}}>For Classes 1 to 12</Text>
                  <RouterLink to='/signup'>
                    <Link>
                      <Button size="large" type="success" style={{fontSize: '25px', padding: '10px 5px', height: '100%', borderRadius: '15px'}} >Get Started</Button>
                    </Link>
                  </RouterLink>
                </Col>
                </HeadShake>
              </Row>
            </Col>
            <Col span={10}>
              <Image src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/dragon.png' />
            </Col>
          </Row>
        </Fragment>
      );
    }

    // Quote Section
    if(this.props.windowSize === 'sm' || this.props.windowSize === 'xs') {
      quoteSection = (
        <Row justify="center" align="middle" style={{ minHeight: '500px', background: 'url(https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/studentsIndia3.webp)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <Col span={22}>
            <Row justify="center" align="middle" style={{ height: '100%' }}>
              <Fade left>
              <Col align="middle">
                <Text style={{color: '#FFF', fontSize: '25px', lineHeight: '35px', textAlign: 'center', textShadow: '1px 1px 1px #000'}}>The important thing is not to stop questioning. Curiosity has its own reason for existing. -Albert Einstein</Text>
              </Col>
              </Fade>
            </Row>
          </Col>
        </Row>
      );
    } else {
      quoteSection = (
        <Row justify="center" align="middle" style={{ minHeight: '800px', background: 'url(https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/studentsIndia3.webp)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <Col span={12}>
            <Row justify="center" align="middle" style={{ height: '100%' }}>
              <Fade left>
              <Col align="middle">
                <Text style={{color: '#FFF', fontSize: '40px', textAlign: 'center', textShadow: '2px 2px 2px #000'}}>The important thing is not to stop questioning. Curiosity has its own reason for existing. -Albert Einstein</Text>
              </Col>
              </Fade>
            </Row>
          </Col>
        </Row>
      );
    }

    // Learn for free Section
    if(this.props.windowSize === 'sm' || this.props.windowSize === 'xs') {
      learnFree = (
        <Row justify="center" align="middle" style={{ backgroundColor: '#FFF', minHeight: '650px' }}>
          <Col align='middle'>
            <Row justify="center" align="middle" style={{ height: '100%' }}>
              <Col align="middle" >
                <Fade left>
                <Text style={{color: '#4C2889', fontSize: '35px', lineHeight: '45px'}}>No Ads, No Payments</Text>
                <img height='200px' src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/wizard.png' />
                <Text style={{color: '#4C2889', fontSize: '35px', lineHeight: '45px'}}>Learn for <span style={{color: '#8A63D2'}}>FREE</span></Text>
                <Text style={{color: '#000', fontSize: '22px', opacity: '0.8'}}>Don't trust us? Try in once &amp; decide yourself</Text>
                <RouterLink to='/login'>
                  <Link>
                    <Button size="large" type="success" style={{fontSize: '18px', padding: '5px 5px', marginTop: '15px', height: '100%', borderRadius: '15px'}} >Check out the courses</Button>
                  </Link>
                </RouterLink>
                </Fade>
              </Col>
            </Row>
          </Col>
        </Row>
      );
    }
    else {
      learnFree = (
        <Row justify="center" align="middle" style={{ backgroundColor: '#FFF', minHeight: '800px' }}>
          <Col span={10}>
            <Row justify="center" align="middle" style={{ height: '100%' }}>
              <Col align="middle" style={{padding: '10px 40px'}}>
                <Fade left>
                <Text style={{color: '#4C2889', fontSize: '50px', lineHeight: '55px'}}>No Ads, No Payments</Text>
                <Text style={{color: '#4C2889', fontSize: '50px', lineHeight: '55px'}}>Learn for <span style={{color: '#8A63D2'}}>FREE</span></Text>
                <Text style={{color: '#000', fontSize: '24px', opacity: '0.8'}}>Don't trust us? Try in once &amp; decide yourself</Text>
                <RouterLink to='/login'>
                  <Link>
                    <Button size="large" type="success" style={{fontSize: '20px', padding: '5px 5px', marginTop: '15px', height: '100%', borderRadius: '15px'}} >Check out the courses</Button>
                  </Link>
                </RouterLink>
                </Fade>
              </Col>
            </Row>
          </Col>
          <Col span={8} style={{padding: '30px 10px'}}>
            <Fade left>
            <Image src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/wizard.png' />
            </Fade>
          </Col>
        </Row>
      );
    }

    return (
      <div>

        {mainHeading}

        {learnFree}

        {courseSpeciality}

        {quoteSection}

      </div>
    );
  }
}

export default LandingPage;
