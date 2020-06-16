import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@zeit-ui/react';

const SignedInLinks = () => {
  return (
    <Fragment>
      <Grid xs={2}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Link to='/' style={{cursor: 'pointer', padding: '10px 5px'}}>Home</Link>
        </div>
      </Grid>
      <Grid xs={2} >
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Link to='/profile' style={{cursor: 'pointer', padding: '10px 5px'}}>Profile</Link>
        </div>
      </Grid>
      <Grid xs={2} >
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Link to='/upload' style={{cursor: 'pointer', padding: '10px 5px'}}>Upload</Link>
        </div>
      </Grid>
    </Fragment>
  )
}

export default SignedInLinks;
