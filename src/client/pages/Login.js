import React, { Component } from 'react';
import LoginForm from './components/forms/LoginForm';
import { connect } from 'react-redux';
import { logInUser } from '../reduxStore/actions/authActions';
import { Note } from '@zeit-ui/react';

class Login extends Component {

  componentDidMount() {
    // window.scrollTo(0, 0);
  }

  logInUser = (cred) => {
    this.props.logInUser(cred);
    // console.log(cred);
  }

  render() {
    const {loginError} = this.props;
    return (
      <React.Fragment>
         <div style={{ margin: '30px auto', width: '60%' }}>
           <h1>
             Log-in to your account
           </h1>
           <LoginForm logInUser={this.logInUser} />
             {
               loginError ? (
                 <Note type="error">{ loginError }</Note>
               ) : null
             }
         </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    loginError: state.auth.loginError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: (cred) => {
      dispatch(logInUser(cred));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
