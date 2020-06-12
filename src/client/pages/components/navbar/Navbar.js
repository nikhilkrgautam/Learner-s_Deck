import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  console.log(props);
    return (
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <Link to='/' style={{textDecoration: 'none'}} >
        Home
      </Link>
      <Link to='/login' style={{textDecoration: 'none'}} >
        Log In
      </Link>
      <Link to='/signup' style={{textDecoration: 'none'}} >
        Sign Up
      </Link>
      <Link to='/profile' style={{textDecoration: 'none'}} >
        Profile
      </Link>
      </div>
    );
}

export default Navbar;
