import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logInUser } from '../reduxStore/actions/authActions';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({[id]: value});
  }

  logInUser = (cred) => {
    this.props.logInUser(cred);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <input type="text" id="name" onChange={this.handleChange} value={this.state.name} />
        <button onClick={() => this.logInUser(this.state.name)}>Log In</button>
        {
          this.props.name ? (<h2>{this.props.name}</h2>) : null
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    name: state.auth.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: (cred) => {
      dispatch(logInUser(cred));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
