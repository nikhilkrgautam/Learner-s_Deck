import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@zeit-ui/react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import Menu from 'react-burger-menu/lib/menus/slide';
import './navbar.css';
// import Menu from 'react-burger-menu/lib/menus/push';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  handleStateChange = (state) => {
    this.setState({menuOpen: state.isOpen})
  }

  closeMenu = (event) => {
    this.setState({menuOpen: false});
  }

  render() {
    const {isAuthenticated, isLoading} = this.props;

    let navbar;

    if(this.props.windowSize === 'sm' || this.props.windowSize === 'xs') {
      navbar = (
        <Fragment>
          {
            isAuthenticated ? (
              <Menu right width={ 275 } isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
                <Link onClick={() => this.closeMenu()} id="dashboard" style={{color: '#FFF'}} className="menu-item" to="/">Dashboard</Link>
                <Link onClick={() => this.closeMenu()} id="login" style={{color: '#FFF'}} className="menu-item" to="/profile">Profile</Link>
              </Menu>
            ) : (
              <Menu right width={ 275 } isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
                <Link onClick={() => this.closeMenu()} id="home" style={{color: '#FFF'}} className="menu-item" to="/">Home</Link>
                <Link onClick={() => this.closeMenu()} id="login" style={{color: '#FFF'}} className="menu-item" to="/login">Log In</Link>
                <Link onClick={() => this.closeMenu()} id="signup" style={{color: '#FFF'}} className="menu-item" to="/signup">Sign Up</Link>
                <Link onClick={() => this.closeMenu()} id="joinus" style={{color: '#FFF'}} className="menu-item" to="/joinus">Join as Teacher</Link>
              </Menu>
            )
          }
        </Fragment>
      );
    } else {
      navbar = (
        <nav style={{backgroundColor: '#4C2889', position: "sticky", top: "0", zIndex: "9999"}}>
          <Grid.Container justify="center" alignItems="center" direction="row" >
            <Grid xs={6} md={4}>
              <div style={{display: 'flex', justifyContent: 'center'}}>
              <Link to='/' style={{cursor: 'pointer', padding: '5px 5px', fontSize: '40px', color: '#FFF'}}>eBuzzet</Link>
              </div>
            </Grid>
            <Grid xs>
              <div></div>
            </Grid>
            {
              isLoading ? null : (isAuthenticated ? <SignedInLinks /> : <SignedOutLinks />)
            }
          </Grid.Container>
        </nav>
      );
    }

    return (
      <Fragment>
        {navbar}
      </Fragment>
    );
  }
}

export default Navbar;
