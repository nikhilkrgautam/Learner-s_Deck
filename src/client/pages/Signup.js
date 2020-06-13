import React, { Component } from 'react';
import SignupForm from './components/forms/SignupForm';
import { connect } from 'react-redux';
import { signUpUser } from '../reduxStore/actions/authActions';
import { Grid } from 'semantic-ui-react';

class Signup extends Component {

  signUpUser = (cred) => {
    // this.props.logInUser(cred);
    console.log(cred);
  }

  render() {
    return (
      <React.Fragment>
        <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <SignupForm signUpUser={this.signUpUser} />
          </Grid.Column>
        </Grid>
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

export default Signup;
