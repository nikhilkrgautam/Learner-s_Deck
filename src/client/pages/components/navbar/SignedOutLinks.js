import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@zeit-ui/react';

const SignedOutLinks = () => {
  return (
    <Fragment>
      <Grid xs={4} md={2} >
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Link to='/signup' style={{cursor: 'pointer', padding: '10px 5px', color: '#FFF'}}>Sign Up</Link>
        </div>
      </Grid>
      <Grid xs={4} md={2} >
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Link to='/login' style={{cursor: 'pointer', padding: '10px 5px', color: '#FFF'}}>Log In</Link>
        </div>
      </Grid>
    </Fragment>
  )
}

export default SignedOutLinks;
