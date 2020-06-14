import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOut } from '../reduxStore/actions/authActions';
import { Button } from '@zeit-ui/react';

class Profile extends Component {

  logOut = () => {
    this.props.logOut();
    // console.log(cred);
  }

  render() {

    return (
      <React.Fragment>
        <h1>Profile</h1>
          <Button type="success" style={{cursor: "pointer", marginTop: '20px'}} onClick={() => this.logOut()}>
            Log out
          </Button>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => {
      dispatch(logOut());
    }
  }
}

export default connect(null, mapDispatchToProps)(Profile);
