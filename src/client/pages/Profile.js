import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { logOut } from '../reduxStore/actions/authActions';
import { updateImage, resetNotes, updateInfo } from '../reduxStore/actions/profileActions';
import { Card, Image, Text, Button, Note, Row, Col } from '@zeit-ui/react';
import ProfileImage from './components/profile/ProfileImage';
import ProfileInfoStudent from './components/profile/ProfileInfoStudent';
import { Redirect } from 'react-router-dom';
import Flip from 'react-reveal/Flip';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
        imageEditor: false,
        infoEditor: false
    };
  }

  componentDidMount() {
    this.props.resetNotes();
    window.scrollTo(0, 0);
    this.props.ReactGA.set({ page: this.props.location.pathname });
    this.props.ReactGA.pageview(this.props.location.pathname);
  }

  // componentDidUpdate(prevProps) {
  //   if (
  //     this.props.location.pathname !== prevProps.location.pathname
  //   ) {
  //     window.scrollTo(0, 0);
  //     console.log("Scrolled up!");
  //   }
  // }

  submitProfileImage = (imageData) => {
    this.props.updateImage(imageData);
    this.setState({ imageEditor: false });
  }

  submitProfileInfo = (infoData) => {
    console.log(infoData);
    this.props.updateInfo(infoData);
    this.setState({ infoEditor: false });
  }

  logOut = () => {
    this.props.logOut();
    // console.log(cred);
  }

  render() {
    const {profileImageError, profileImageSent, profileInfoError, profileInfoSent, userData} = this.props;

    let userFields, imageFields, logOutButton, profileCard, pageHeading;

    if(this.props.windowSize === 'sm' || this.props.windowSize === 'xs') {
      pageHeading = (
        <Text style={{padding: '40px 30px', margin: '0', fontSize: '40px', fontWeight: '700'}}>Profile</Text>
      );
    } else {
      pageHeading = (
        <Text style={{padding: '50px 60px', margin: '0', fontSize: '55px', fontWeight: '700'}}>Profile</Text>
      );
    }

    if(this.props.windowSize === 'sm' || this.props.windowSize === 'xs') {
      profileCard = (
        <Fragment>
          <Card width="100%" style={{marginBottom: '40px'}}>
            <Image src={userData.image} height="20%" width="100%" style={{ objectFit: 'cover' }} />
            <Text style={{ marginBottom: '15px', fontSize: '30px', fontWeight: '700' }}>{userData.username}</Text>
            <Text style={{fontSize: '20px', fontWeight: '600'}} type="secondary">Your email: <span style={{color: '#0366D6'}}>{userData.email}</span></Text>
            <Text style={{fontSize: '20px', fontWeight: '600'}} type="secondary">Class: <span style={{color: '#0366D6'}}>{userData.class ? userData.class : 'Not provided'}</span></Text>
            <Text style={{fontSize: '20px', fontWeight: '600'}} type="secondary">School/College: <span style={{color: '#0366D6'}}>{userData.school ? userData.school : 'Not provided'}</span></Text>

            <Card.Footer>
              <Text style={{fontSize: '20px'}} type="secondary">Joined on: {userData.date_created.slice(0,10)}</Text>
            </Card.Footer>
          </Card>
        </Fragment>
      );
    } else {
      profileCard = (
        <Fragment>
          <Card width="100%" style={{marginBottom: '40px'}}>
            <Image src={userData.image} height="20%" width="100%" style={{ objectFit: 'cover' }} />
            <Text h2 style={{ marginBottom: '15px' }}>{userData.username}</Text>
            <Text h4 type="secondary">Your email: <span style={{color: '#0366D6'}}>{userData.email}</span></Text>
            <Text h4 type="secondary">Class: <span style={{color: '#0366D6'}}>{userData.class ? userData.class : 'Not provided'}</span></Text>
            <Text h4 type="secondary">School/College: <span style={{color: '#0366D6'}}>{userData.school ? userData.school : 'Not provided'}</span></Text>

            <Card.Footer>
              <Text h4 type="secondary">Joined on: {userData.date_created.slice(0,10)}</Text>
            </Card.Footer>
          </Card>
        </Fragment>
      );
    }


    imageFields = (
      <Fragment>
        {/*    Image Section    */}
        {
          this.state.imageEditor ? (
            <ProfileImage submitProfileImage={(imageData) => this.submitProfileImage(imageData)} />
          ) : null
        }

        {
          this.state.imageEditor ? null : (
            <div style={{margin: '40px 0'}}>
              <Button
                type="success"
                style={{cursor: "pointer"}}
                onClick={() => this.setState({imageEditor: true})}
              >
                Change Image
              </Button>
            </div>
          )
        }

        {
          profileImageError ? (
            <Note type="error" style={{marginTop: '20px'}}>{ profileImageError }</Note>
          ) : null
        }
        {
          profileImageSent ? (
            <Note type="success" style={{marginTop: '20px'}}>File uploaded successfully!</Note>
          ) : null
        }
      </Fragment>
    );

    userFields = (
      <Fragment>
        {/*    Class Section    */}
        {
          this.state.infoEditor === 'c' ? (
            <ProfileInfoStudent type='Class' submitProfileInfo={(infoData) => this.submitProfileInfo(infoData)} />
          ) : null
        }

        {
          (this.state.infoEditor) ? null : (
            <div style={{margin: '40px 0'}}>
              <Button
                type="success"
                style={{cursor: "pointer"}}
                onClick={() => this.setState({infoEditor: 'c'})}
              >
                Update Class
              </Button>
            </div>
          )
        }

        {/*    School Section    */}
        {
          this.state.infoEditor === 's' ? (
            <ProfileInfoStudent type='School' submitProfileInfo={(infoData) => this.submitProfileInfo(infoData)} />
          ) : null
        }

        {
          (this.state.infoEditor) ? null : (
            <div style={{margin: '40px 0'}}>
              <Button
                type="success"
                style={{cursor: "pointer"}}
                onClick={() => this.setState({infoEditor: 's'})}
              >
                Update School
              </Button>
            </div>
          )
        }

        {/*    Error Section    */}
        {
          profileInfoError ? (
            <Note type="error" style={{marginTop: '20px'}}>{ profileInfoError }</Note>
          ) : null
        }
        {
          profileInfoSent ? (
            <Note type="success" style={{marginTop: '20px'}}>Details updated!</Note>
          ) : null
        }
      </Fragment>
    );

    logOutButton = (
      <Fragment>
        {/*    Log Out Button    */}
        <div style={{margin: '40px 0'}}>
          <Button type="error" style={{cursor: "pointer"}} onClick={() => this.logOut()}>
            Log out
          </Button>
        </div>
      </Fragment>
    );

    let profileSection;
    if(this.props.windowSize === 'sm' || this.props.windowSize === 'xs') {
      profileSection = (
        <Fragment>
          <Col span={18}>
            <Row justify="center" align="middle" style={{ height: '100%' }}>
              <Flip left>
              <Col align="middle" style={{maxWidth: '450px'}}>

                { profileCard }

              </Col>
              </Flip>
            </Row>
            <Row justify="center" align="middle" style={{ height: '100%' }}>
              <Flip left>
              <Col align="middle">

                { imageFields }

                { userFields }

                { logOutButton }

              </Col>
              </Flip>
            </Row>
          </Col>
        </Fragment>
      );
    } else {
      profileSection = (
        <Fragment>
          <Col span={10}>
            <Flip left>
            <Row justify="center" align="middle" style={{ height: '100%' }}>
              <Col align="middle" style={{maxWidth: '450px'}}>

                { profileCard }

              </Col>
            </Row>
            </Flip>
          </Col>

          <Col span={8}>
            <Flip left>
            <Row justify="center" align="middle" style={{ height: '100%' }}>
              <Col align="middle">

                { imageFields }

                { userFields }

                { logOutButton }

              </Col>
            </Row>
            </Flip>
          </Col>
        </Fragment>
      );
    }

    return (
      <Fragment>
          {pageHeading}
          <Row justify="center" align="middle" style={{ minHeight: '700px' }}>
            { profileSection }
          </Row>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    profileImageError: state.profile.profileImageError,
    profileImageSent: state.profile.profileImageSent,
    profileInfoError: state.profile.profileInfoError,
    profileInfoSent: state.profile.profileInfoSent,
    userData: state.data.userData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => {
      dispatch(logOut());
    },
    updateImage: (imageData) => {
      dispatch(updateImage(imageData));
    },
    updateInfo: (infoData) => {
      dispatch(updateInfo(infoData));
    },
    resetNotes: () => {
      dispatch(resetNotes());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
