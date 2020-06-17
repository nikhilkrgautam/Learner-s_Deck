import React, { Component } from 'react';
import './app.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './pages/components/navbar/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Upload from './pages/Upload';
import { connect } from 'react-redux';
import { isLoggedIn } from './reduxStore/actions/authActions';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
  }

  componentDidMount() {
    this.props.isLoggedIn();
  }

  render() {
    const {isAuthenticated, token} = this.props;

    return (
      <BrowserRouter>
        <Navbar isAuthenticated={isAuthenticated}/>
        <Switch>
          <Route
            path='/'
            exact={true}
            render={(props) => isAuthenticated ? <Home {...props} /> : <Redirect to='/login' />}
          />
          <Route
            path='/login'
            exact={true}
            render={(props) => !isAuthenticated ? <Login {...props} /> : <Redirect to='/' />}
          />
          <Route
            path='/signup'
            exact={true}
            render={(props) => !isAuthenticated ? <Signup {...props} /> : <Redirect to='/' />}
          />
          <Route
            path='/profile'
            exact={true}
            render={(props) => isAuthenticated ? <Profile {...props} /> : <Redirect to='/login' />}
          />
          <Route
            path='/upload'
            exact={true}
            render={(props) => isAuthenticated ? <Upload {...props} /> : <Redirect to='/login' />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    isLoggedIn: () => {
      dispatch(isLoggedIn());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);