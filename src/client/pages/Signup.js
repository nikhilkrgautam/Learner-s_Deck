import React, { Component } from 'react';
import SignupForm from './components/forms/SignupForm';
import { connect } from 'react-redux';
import { signUpUser } from '../reduxStore/actions/authActions';
import { Note } from '@zeit-ui/react';

class Signup extends Component {

  componentDidMount() {
    // window.scrollTo(0, 0);
  }

  signUpUser = (cred) => {
    this.props.signUpUser(cred);
    // console.log(cred);
  }

  render() {
    const {signupError} = this.props;
    return (
      <React.Fragment>
        <div style={{ margin: '30px auto', width: '60%' }}>
          <h1>
            Sign-up with your email
          </h1>
          <SignupForm signUpUser={this.signUpUser} />
            {
              signupError ? (
                <Note type="error">{ signupError }</Note>
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
