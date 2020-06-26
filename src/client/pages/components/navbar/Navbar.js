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
        <nav style={{backgroundColor: '#4C2889', position: "sticky", top: "0", zIndex: "9999"}}>
          <Grid.Container justify="center" alignItems="center" direction="row" >
            <Grid xs={6} md={4}>
              <div style={{display: 'flex', justifyContent: 'center'}}>
              <Link to='/' style={{cursor: 'pointer', padding: '5px 5px', fontSize: '45px', color: '#FFF'}}>eBuzzet</Link>
              </div>
            </Grid>
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
