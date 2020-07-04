import React, { Component } from 'react';
import SignupForm from './components/forms/SignupForm';
import { connect } from 'react-redux';
import { signUpUser } from '../reduxStore/actions/authActions';
import { Note, Text } from '@zeit-ui/react';
import LightSpeed from 'react-reveal/LightSpeed';

class Signup extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  signUpUser = (cred) => {
    this.props.signUpUser(cred);
    // console.log(cred);
  }

  render() {
    const {signupError} = this.props;

    let pageHeading;
    if(this.props.windowSize === 'sm' || this.props.windowSize === 'xs') {
      pageHeading = (
        <Text h3 style={{ fontSize: '40px'}}>
          Sign-up with your email
        </Text>
      );
    } else {
      pageHeading = (
        <Text h3 style={{ fontSize: '50px'}}>
          Sign-up with your email
        </Text>
      );
    }

    return (
      <React.Fragment>
        <div style={{ padding: '70px 5px' }}>
          <LightSpeed left>
          <div style={{ margin: '10px auto', width: '80%' }}>
            {pageHeading}
            <SignupForm signUpUser={this.signUpUser} />
              {
                signupError ? (
                  <Note type="error">{ signupError }</Note>
                ) : null
              }
          </div>
          </LightSpeed>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    signupError: state.auth.signupError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (cred) => {
      dispatch(signUpUser(cred));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
