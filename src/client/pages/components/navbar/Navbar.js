import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@zeit-ui/react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

class Navbar extends Component {

  render() {
    const {isAuthenticated} = this.props;
    return (
      <Fragment>
        <nav style={{backgroundColor: '#3291FF', position: "sticky", top: "0", zIndex: "9999"}}>
          <Grid.Container justify="center" >
            <Grid xs>
              <div></div>
            </Grid>
            {
              isAuthenticated ? <SignedInLinks /> : <SignedOutLinks />
            }
          </Grid.Container>
        </nav>
      </Fragment>
    );
  }
}

export default Navbar;
