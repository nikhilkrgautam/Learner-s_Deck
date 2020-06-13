import React, { Component } from 'react';
import LoginForm from './components/forms/LoginForm';
import { connect } from 'react-redux';
import { logInUser } from '../reduxStore/actions/authActions';
import { Grid } from 'semantic-ui-react';

class Login extends Component {

  logInUser = (cred) => {
    // this.props.logInUser(cred);
    console.log(cred);
  }

  render() {
    return (
      <React.Fragment>
        <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <LoginForm logInUser={this.logInUser} />
          </Grid.Column>
        </Grid>
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
