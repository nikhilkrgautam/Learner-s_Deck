import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@zeit-ui/react';

const SignedInLinks = () => {
  return (
    <Fragment>
      <Grid xs={4} md={2} >
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Link to='/dashboard' style={{cursor: 'pointer', padding: '10px 5px', color: '#FFF', textAlign: 'center'}}>Dashboard</Link>
        </div>
      </Grid>
      <Grid xs={4} md={2} >
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Link to='/courses' style={{cursor: 'pointer', padding: '10px 5px', color: '#FFF', textAlign: 'center'}}>Courses</Link>
        </div>
      </Grid>
      <Grid xs={4} md={2} >
        <div style={{display: 'flex', justifyContent: 'center', color: '#FFF'}}>
        <Link to='/profile' style={{cursor: 'pointer', padding: '10px 5px', color: '#FFF', textAlign: 'center'}}>Profile</Link>
        </div>
      </Grid>
      {/*<Grid xs={4} md={2} >
        <div style={{display: 'flex', justifyContent: 'center', color: '#FFF'}}>
        <Link to='/video' style={{cursor: 'pointer', padding: '10px 5px', color: '#FFF'}}>Video</Link>
        </div>
      </Grid>*/}
    </Fragment>
  )
}

export default SignedInLinks;
