import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOut } from '../reduxStore/actions/authActions';
import { Button } from '@zeit-ui/react';

class Upload extends Component {

  logOut = () => {
    this.props.logOut();
    // console.log(cred);
  }

  render() {

    return (
      <React.Fragment>
        <h1>Upload Files</h1>
        <form>
          <div>
            <input type="file" />
          </div>
          <div>
            <Button type="submit">Upload</button>
          </div>
        </form>
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

export default connect(null, mapDispatchToProps)(Upload);
