import React, { Component, Fragment } from 'react';
import { Row, Col, Text, Button, Image, Link, Card } from '@zeit-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import { compose } from 'redux';

class Courses extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
                <Col align='middle'>
                  <Text style={{color: '#FFF', fontSize: '25px', textAlign: 'center'}}>Premium Quality</Text>
                  <img width='100%' height='350px' style={{padding: '20px 20px', objectFit: 'cover', display: 'block'}} src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/premiumQuality.webp' />
                </Col>
              </Row>
              <Row justify="center" align="middle" style={{ height: '100%', margin: '10px 5px 30px' }}>
                <Col align='middle'>
                  <Text style={{color: '#FFF', fontSize: '25px', textAlign: 'center'}}>Verified Teachers</Text>
                  <img width='100%' height='350px' style={{padding: '20px 20px', objectFit: 'cover', display: 'block'}} src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/verifiedTeacher.webp' />
                </Col>
              </Row>
              <Row justify="center" align="middle" style={{ height: '100%', margin: '10px 5px 40px' }}>
                <Col align='middle'>
                  <Text style={{color: '#FFF', fontSize: '25px', textAlign: 'center'}}>Interactive Learning</Text>
                  <img width='100%' height='350px' style={{padding: '20px 20px', objectFit: 'cover', display: 'block'}} src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/interactive.webp' />
                </Col>
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
              <Row justify="center" align="middle" style={{ height: '100%', margin: '10px 5px 80px' }}>
                <Col span={8} style={{margin: '20px 20px'}}>
                  <Text style={{color: '#FFF', fontSize: '30px', textAlign: 'center'}}>Premium Quality</Text>
                  <img width='100%' height='400px' style={{padding: '20px 20px', objectFit: 'cover'}} src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/premiumQuality.webp' />
                </Col>

                <Col span={8} style={{margin: '20px 20px'}}>
                  <Text style={{color: '#FFF', fontSize: '30px', textAlign: 'center'}}>Verified Teachers</Text>
                  <img width='100%' height='400px' style={{padding: '20px 20px', objectFit: 'cover'}} src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/verifiedTeacher.webp' />
                </Col>

                <Col span={8} style={{margin: '20px 20px'}}>
                  <Text style={{color: '#FFF', fontSize: '30px', textAlign: 'center'}}>Interactive Learning</Text>
                  <img width='100%' height='400px' style={{padding: '20px 20px', objectFit: 'cover'}} src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/interactive.webp' />
                </Col>
              </Row>
            </Col>
          </Row>
        </Fragment>
      );
    }

    // Page Heading
    if(this.props.windowSize === 'sm' || this.props.windowSize === 'xs') {
      mainHeading = (
        <Fragment>
          <Row justify="center" align="middle" style={{ backgroundColor: '#7928CA', minHeight: '620px' }}>
            <Col align='middle'>
              <Row justify="center" align="middle" style={{ height: '100%' }}>
                <Col align="middle">
                  <Text style={{color: '#FFF', fontSize: '50px'}}>eBuzzet</Text>
                  <img height='200px' src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/dragon.png' />
                  <Text h3 style={{color: '#FFF', fontSize: '26px', margin: '10px 5px'}}>India's very own eLearning platform</Text>
                  <Text h3 style={{color: '#FFF', fontSize: '22px', margin: '10px 5px 40px'}}>For Classes 9 to 12</Text>
                  <RouterLink to='/signup'>
                    <Link>
                      <Button type="success" style={{fontSize: '20px', padding: '10px 5px', height: '100%', borderRadius: '15px'}} >Get Started</Button>
                    </Link>
                  </RouterLink>
                </Col>
              </Row>
            </Col>
          </Row>
        </Fragment>
      );
    } else {
      mainHeading = (
        <Fragment>
          <Row justify="center" align="middle" style={{ backgroundColor: '#7928CA', minHeight: '800px' }}>
            <Col span={8}>
              <Row justify="center" align="middle" style={{ height: '100%' }}>
                <Col align="middle">
                  <Text style={{color: '#FFF', fontSize: '60px'}}>eBuzzet</Text>
                  <Text h3 style={{color: '#FFF', fontSize: '32px', margin: '10px 5px'}}>India's very own eLearning platform</Text>
                  <Text h3 style={{color: '#FFF', fontSize: '26px', margin: '10px 5px 40px'}}>For Classes 9 to 12</Text>
                  <RouterLink to='/signup'>
                    <Link>
                      <Button size="large" type="success" style={{fontSize: '25px', padding: '10px 5px', height: '100%', borderRadius: '15px'}} >Get Started</Button>
                    </Link>
                  </RouterLink>
                </Col>
              </Row>
            </Col>
            <Col span={10}>
              <Image src='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/landingPage/dragon.png' />
            </Col>
          </Row>
        </Fragment>
      );
    }

    return (
      <div>

        {mainHeading}

        {courseSpeciality}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    userData: state.data.userData
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//
//   }
// }

export default connect(mapStateToProps)(Courses);
