import React, { Component, Suspense, lazy } from 'react';
import './app.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './pages/components/navbar/Navbar';
import Footer from './pages/components/footer/Footer';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Profile from './pages/Profile';
// import Video from './pages/Video';
const Dashboard = lazy(() => import('./pages/Dashboard' /* webpackChunkName: "home" */));
const LandingPage = lazy(() => import('./pages/LandingPage' /* webpackChunkName: "landing" */));
const Login = lazy(() => import('./pages/Login' /* webpackChunkName: "login" */));
const Signup = lazy(() => import('./pages/Signup' /* webpackChunkName: "signup" */));
const Profile = lazy(() => import('./pages/Profile' /* webpackChunkName: "profile" */));
// const Video = lazy(() => import('./pages/Video' /* webpackChunkName: "video" */));
import { connect } from 'react-redux';
import { isLoggedIn } from './reduxStore/actions/authActions';


class App extends Component {

  componentDidMount() {
    this.props.isLoggedIn();
  }

  render() {
    const {isAuthenticated, token, isLoading} = this.props;

    return (
      <BrowserRouter>
        <Navbar isAuthenticated={isAuthenticated}/>
        <main style={{minHeight: '100vh'}}>
        {
          isLoading ? (
            <div className='loader'>Loading...</div>
          ) : (
            <Suspense fallback={<div className='loader'>Loading...</div>}>
              <Switch>
                <Route
                  path='/'
                  exact={true}
                  render={(props) => !isAuthenticated ? <LandingPage {...props} /> : <Redirect to='/dashboard' />}
                />
                <Route
                  path='/dashboard'
                  exact={true}
                  render={(props) => isAuthenticated ? <Dashboard {...props} /> : <Redirect to='/login' />}
                />
                <Route
                  path='/login'
                  exact={true}
                  render={(props) => !isAuthenticated ? <Login {...props} /> : <Redirect to='/dashboard' />}
                />
                <Route
                  path='/signup'
                  exact={true}
                  render={(props) => !isAuthenticated ? <Signup {...props} /> : <Redirect to='/dashboard' />}
                />
                <Route
                  path='/profile'
                  exact={true}
                  render={(props) => isAuthenticated ? <Profile {...props} /> : <Redirect to='/login' />}
                />
                {/*<Route
                  path='/video'
                  exact={true}
                  render={(props) => isAuthenticated ? <Video {...props} /> : <Redirect to='/login' />}
                />*/}
              </Switch>
            </Suspense>
          )
        }
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
    isLoading: state.auth.isLoading
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
