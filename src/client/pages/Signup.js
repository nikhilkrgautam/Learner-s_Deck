import React, { Component } from 'react';
import SignupForm from './components/forms/SignupForm';
import { connect } from 'react-redux';
import { signUpUser } from '../reduxStore/actions/authActions';

class Signup extends Component {

  signUpUser = (cred) => {
    this.props.signUpUser(cred);
    // console.log(cred);
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ margin: '30px auto', width: '60%' }}>
          <h1>
            Sign-up with your email
          </h1>
          <SignupForm signUpUser={this.signUpUser} />
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (cred) => {
      dispatch(signUpUser(cred));
    }
  }
}

export default connect(null, mapDispatchToProps)(Signup);
