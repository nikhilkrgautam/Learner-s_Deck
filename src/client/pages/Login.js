import React, { Component } from 'react';
import LoginForm from './components/forms/LoginForm';
import { connect } from 'react-redux';
import { logInUser } from '../reduxStore/actions/authActions';
import { Row } from '@zeit-ui/react';

class Login extends Component {

  logInUser = (cred) => {
    this.props.logInUser(cred);
    // console.log(cred);
  }

  render() {
    return (
      <React.Fragment>
         <div style={{ margin: '30px auto', width: '60%' }}>
           <h1>
             Log-in to your account
           </h1>
           <LoginForm logInUser={this.logInUser} />
         </div>
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
