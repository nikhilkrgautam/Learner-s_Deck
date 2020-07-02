import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import { Text, Divider, Grid } from '@zeit-ui/react';

class Footer extends Component {

	render() {
		return (
      <Fragment>
  			<footer style={{padding: '0 40px', backgroundColor: '#FFF', color: '#000'}}>
          <Divider volume={2} y={1} style={{backgroundColor: '#111'}} />
						<Grid.Container justify="center" alignItems="center" direction="row" >
	            <Grid xs={12} md={10}>
								<Text style={{fontSize: '20px'}}>Copyright &copy; 2020 All Rights Reserved by
			          <Link to="/"> Ebuzzet</Link>.</Text>
	            </Grid>
	            <Grid xs>
	              <div></div>
	            </Grid>
							<Grid xs={8} md={3}>
								<Link to="/contact"><Text style={{fontSize: '20px'}}>Contact us</Text></Link>
	            </Grid>
	          </Grid.Container>

  			</footer>
      </Fragment>
		);
	}
}

export default Footer;
