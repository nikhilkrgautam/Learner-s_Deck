import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import { Text, Divider, Grid } from '@zeit-ui/react';

class Footer extends Component {

	render() {

		let footer;
		if(this.props.windowSize === 'sm' || this.props.windowSize === 'xs') {
			footer = (
				<footer style={{padding: '0 20px', backgroundColor: '#444', color: '#000'}}>
						<Grid.Container justify="center" alignItems="center" direction="row" >
	            <Grid xs={14} md={10}>
								<Text style={{fontSize: '14px', color: '#FFF'}}>Copyright &copy; 2020 All Rights Reserved by
			          <Link to="/" style={{color: '#3291FF'}}> Ebuzzet</Link>.</Text>
	            </Grid>
	            <Grid xs>
	              <div></div>
	            </Grid>
							<Grid xs={8} md={3}>
								<Link to="/contact"><Text style={{fontSize: '14px', color: '#3291FF'}}>Contact us</Text></Link>
	            </Grid>
	          </Grid.Container>
  			</footer>
			);
		} else {
			footer = (
				<footer style={{padding: '0 40px', backgroundColor: '#444', color: '#000'}}>
						<Grid.Container justify="center" alignItems="center" direction="row" >
	            <Grid xs={12} md={10}>
								<Text style={{fontSize: '18px', color: '#FFF'}}>Copyright &copy; 2020 All Rights Reserved by
			          <Link to="/" style={{color: '#3291FF'}}> Ebuzzet</Link>.</Text>
	            </Grid>
	            <Grid xs>
	              <div></div>
	            </Grid>
							<Grid xs={8} md={3}>
								<Link to="/contact"><Text style={{fontSize: '18px', color: '#3291FF'}}>Contact us</Text></Link>
	            </Grid>
	          </Grid.Container>
  			</footer>
			);
		}

		return (
      <Fragment>
  			{footer}
      </Fragment>
		);
	}
}

export default Footer;
