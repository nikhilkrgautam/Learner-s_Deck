import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logInUser } from '../reduxStore/actions/authActions';

class Login extends Component {

  logInUser = (cred) => {
    this.props.logInUser(cred);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <button onClick={() => this.logInUser('user details')}>Log In</button>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: (cred) => {
      dispatch(logInUser(cred));
    }
  }
}

export default connect(null, mapDispatchToProps)(Login);
