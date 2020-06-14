import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  render() {
    return (
      <Fragment>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <Link to='/' style={{cursor: 'pointer', padding: '10px 5px'}}>Home</Link>
          <Link to='/signup' style={{cursor: 'pointer', padding: '10px 5px'}}>Sign Up</Link>
          <Link to='/login' style={{cursor: 'pointer', padding: '10px 5px'}}>Log In</Link>
          <Link to='/profile' style={{cursor: 'pointer', padding: '10px 5px'}}>Profile</Link>
        </div>
      </Fragment>
    );
  }
}

export default Navbar;
