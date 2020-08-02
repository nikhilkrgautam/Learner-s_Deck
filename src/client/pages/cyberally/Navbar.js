import React, { Component, Fragment } from 'react';
import { Grid, Text } from '@zeit-ui/react';

class Navbar extends Component {

  render() {

    return (
      <nav style={{backgroundColor: '#4C2889', position: "sticky", top: "0", zIndex: "9999"}}>
        <Grid.Container justify="center" alignItems="center" direction="row" >
          <Grid xs={6} md={4}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <Text to='/' style={{cursor: 'pointer', padding: '5px 5px', margin: '5px 0px', fontSize: '34px', color: '#FFF'}}>Cyber Ally</Text>
            </div>
          </Grid>
          <Grid xs>
            <div></div>
          </Grid>
        </Grid.Container>
      </nav>
    );
  }
}

export default Navbar;
