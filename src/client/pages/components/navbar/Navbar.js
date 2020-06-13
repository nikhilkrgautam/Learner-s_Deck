import React, { Component } from 'react';
import { Container, Menu, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  console.log(props);
    return (

      <Menu
        pointing
        size='large'
        color='blue'
      >
        <Container>
          <Menu.Item
            as={Link}
            to='/'
          >
            Home
          </Menu.Item>
          <Menu.Item
            as={Link}
            to='/profile'
          >Profile</Menu.Item>
          <Menu.Item position='right'>
            <Button as={Link} to='/login'>
              Log in
            </Button>
            <Button as={Link} to='/signup' primary={true} style={{ marginLeft: '0.5em' }}>
              Sign Up
            </Button>
          </Menu.Item>
        </Container>
      </Menu>
    );
}

export default Navbar;
