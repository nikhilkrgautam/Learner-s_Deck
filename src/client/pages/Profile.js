import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { logOut } from '../reduxStore/actions/authActions';
import { updateImage, resetNotes, updateInfo } from '../reduxStore/actions/profileActions';
import { Card, Image, Text, Button, Note } from '@zeit-ui/react';
import ProfileImage from './components/profile/ProfileImage';
import ProfileInfoStudent from './components/profile/ProfileInfoStudent';
import ProfileInfoTeacher from './components/profile/ProfileInfoTeacher';
import { Redirect } from 'react-router-dom';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state ={
        imageEditor: false,
        infoEditor: false
    };
  }

  componentDidMount() {
    this.props.resetNotes();
    // window.scrollTo(0, 0);
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

    let userFields;

    if(userData.role === 'S') {
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
        </Fragment>
      );
    }
    else if (userData.role === 'T') {
      userFields = (
        <Fragment>
          {/*    Degree Section    */}
          {
            this.state.infoEditor === 'd' ? (
              <ProfileInfoTeacher type='Degree' submitProfileInfo={(infoData) => this.submitProfileInfo(infoData)} />
            ) : null
          }

          {
            (this.state.infoEditor) ? null : (
              <div style={{margin: '40px 0'}}>
                <Button
                  type="success"
                  style={{cursor: "pointer"}}
                  onClick={() => this.setState({infoEditor: 'd'})}
                >
                  Update Degree
                </Button>
              </div>
            )
          }

          {/*    Experience Section    */}
          {
            this.state.infoEditor === 'e' ? (
              <ProfileInfoTeacher type='Experience' submitProfileInfo={(infoData) => this.submitProfileInfo(infoData)} />
            ) : null
          }

          {
            (this.state.infoEditor) ? null : (
              <div style={{margin: '40px 0'}}>
                <Button
                  type="success"
                  style={{cursor: "pointer"}}
                  onClick={() => this.setState({infoEditor: 'e'})}
                >
                  Update Experience
                </Button>
              </div>
            )
          }
        </Fragment>
      );
    }
    else {
      userFields = null;
    }

    return (
      <Fragment>
        <div style={{ margin: '30px auto', width: '60%' }}>

          <h1 style={{marginBottom: '40px'}}>Profile</h1>

          <Card width="400px" style={{marginBottom: '40px'}}>
            <Image src={userData.image} height="400" width="500" style={{ objectFit: 'cover' }} />
            <Text h2 style={{ marginBottom: '15px' }}>{userData.username}</Text>
            <Text h4 type="secondary">Your email: <span style={{color: '#0366D6'}}>{userData.email}</span></Text>
            {
              userData.role === 'S' ? (
                <Fragment>
                  <Text h4 type="secondary">Class: <span style={{color: '#0366D6'}}>{userData.class ? userData.class : 'Not provided'}</span></Text>
                  <Text h4 type="secondary">School/College: <span style={{color: '#0366D6'}}>{userData.school ? userData.school : 'Not provided'}</span></Text>
                </Fragment>
              ) : (
                <Fragment>
                  <Text h4 type="secondary">Degree: <span style={{color: '#0366D6'}}>{userData.degree ? userData.degree : 'Not provided'}</span></Text>
                  <Text h4 type="secondary">Experience: <span style={{color: '#0366D6'}}>{userData.experience ? userData.experience : 'Not provided'}</span></Text>
                </Fragment>
              )
            }
            <Card.Footer>
              <Text h4 type="secondary">Joined on: {userData.date_created.slice(0,10)}</Text>
            </Card.Footer>
          </Card>

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


          { userFields }


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

          {/*    Log Out Button    */}
          <div style={{margin: '40px 0'}}>
            <Button type="error" style={{cursor: "pointer"}} onClick={() => this.logOut()}>
              Log out
            </Button>
          </div>

        </div>
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
