import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import { Text, Divider } from '@zeit-ui/react';

class Footer extends Component {

	render() {
		return (
      <Fragment>
  			<footer style={{padding: '0 40px', backgroundColor: '#FFF', color: '#000'}}>
          <Divider volume={2} y={1} style={{backgroundColor: '#111'}} />
          <p>Copyright &copy; 2020 All Rights Reserved by
          <Link to="/"> Ebuzzet </Link>.</p>
  			</footer>
      </Fragment>
		);
	}
}

export default Footer;
