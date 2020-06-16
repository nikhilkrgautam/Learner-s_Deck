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
        <Grid.Container gap={2} justify="center">
          <Grid xs>
            <div></div>
          </Grid>
          {
            isAuthenticated ? <SignedInLinks /> : <SignedOutLinks />
          }
        </Grid.Container>
      </Fragment>
    );
  }
}

export default Navbar;
