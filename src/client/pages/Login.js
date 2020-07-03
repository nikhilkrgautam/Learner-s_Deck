import React, { Component } from 'react';
import LoginForm from './components/forms/LoginForm';
import { connect } from 'react-redux';
import { logInUser } from '../reduxStore/actions/authActions';
import { Note, Text } from '@zeit-ui/react';

class Login extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  logInUser = (cred) => {
    this.props.logInUser(cred);
    // console.log(cred);
  }

  render() {
    const {loginError} = this.props;

    let pageHeading;
    if(this.props.windowSize === 'sm' || this.props.windowSize === 'xs') {
      pageHeading = (
        <Text h3 style={{ fontSize: '40px'}}>
          Log in to your account
        </Text>
      );
    } else {
      pageHeading = (
        <Text h3 style={{ fontSize: '50px'}}>
          Log in to your account
        </Text>
      );
    }

    return (
      <React.Fragment>
         <div style={{ padding: '70px 5px' }}>
           <div style={{ margin: '10px auto', width: '80%' }}>
             {pageHeading}
             <LoginForm logInUser={this.logInUser} />
               {
                 loginError ? (
                   <Note type="error">{ loginError }</Note>
                 ) : null
               }
           </div>
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
