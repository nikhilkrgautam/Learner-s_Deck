import React, { Component, Suspense, lazy } from 'react';
import './app.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './pages/components/navbar/Navbar';
import Footer from './pages/components/footer/Footer';
const Dashboard = lazy(() => import('./pages/Dashboard' /* webpackChunkName: "home" */));
const LandingPage = lazy(() => import('./pages/infoPages/LandingPage' /* webpackChunkName: "landing" */));
const Login = lazy(() => import('./pages/authorization/Login' /* webpackChunkName: "login" */));
const Signup = lazy(() => import('./pages/authorization/Signup' /* webpackChunkName: "signup" */));
const Profile = lazy(() => import('./pages/Profile' /* webpackChunkName: "profile" */));
const Joinus = lazy(() => import('./pages/authorization/Joinus' /* webpackChunkName: "joinus" */));
const Contact = lazy(() => import('./pages/infoPages/Contact' /* webpackChunkName: "contact" */));
const Courses = lazy(() => import('./pages/Courses' /* webpackChunkName: "courses" */));
const CoursePage = lazy(() => import('./pages/CoursePage' /* webpackChunkName: "coursepage" */));
// const Video = lazy(() => import('./pages/Video' /* webpackChunkName: "video" */));
import { connect } from 'react-redux';
import { isLoggedIn } from './reduxStore/actions/authActions';
import history from './utils/history';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      windowSize: 'lg'
    };
    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    this.props.isLoggedIn();
    window.addEventListener("resize", this.resize);
		this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  resize() {
		if (window.innerWidth < 10000 && window.innerWidth > 1280) {
			this.setState({
				windowSize: "lg"
			});
		} else if (window.innerWidth <= 1280 && window.innerWidth > 900) {
			this.setState({
				windowSize: "md"
			});
		} else if (window.innerWidth <= 900 && window.innerWidth > 650) {
			this.setState({
				windowSize: "sm"
			});
		} else if (window.innerWidth <= 650 && window.innerWidth > 0) {
			this.setState({
				windowSize: "xs"
			});
		}
	}

  render() {
    const {isAuthenticated, token, isLoading} = this.props;
    const location = history.location;

    return (
      <BrowserRouter>
        <Navbar isLoading={isLoading} isAuthenticated={isAuthenticated} windowSize={this.state.windowSize}/>
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
                  render={(props) => !isAuthenticated ? <LandingPage windowSize={this.state.windowSize} {...props} /> : <Redirect to='/dashboard' />}
                />
                <Route
                  path='/dashboard'
                  exact={true}
                  render={(props) => isAuthenticated ? <Dashboard firstLocation={location} windowSize={this.state.windowSize} {...props} /> : <Redirect to='/login' />}
                />
                <Route
                  path='/login'
                  exact={true}
                  render={(props) => !isAuthenticated ? <Login windowSize={this.state.windowSize} {...props} /> : <Redirect to='/dashboard' />}
                />
                <Route
                  path='/signup'
                  exact={true}
                  render={(props) => !isAuthenticated ? <Signup windowSize={this.state.windowSize} {...props} /> : <Redirect to='/dashboard' />}
                />
                <Route
                  path='/profile'
                  exact={true}
                  render={(props) => isAuthenticated ? <Profile windowSize={this.state.windowSize} {...props} /> : <Redirect to='/login' />}
                />
                <Route
                  path='/courses/:course_id'
                  render={(props) => isAuthenticated ? <CoursePage windowSize={this.state.windowSize} {...props} /> : <Redirect to='/login' />}
                />
                <Route
                  path='/courses'
                  exact={true}
                  render={(props) => isAuthenticated ? <Courses windowSize={this.state.windowSize} {...props} /> : <Redirect to='/login' />}
                />
                <Route
                  path='/joinus'
                  exact={true}
                  render={(props) => !isAuthenticated ? <Joinus windowSize={this.state.windowSize} {...props} /> : <Redirect to='/dashboard' />}
                />
                <Route
                  path='/contact'
                  exact={true}
                  render={(props) => <Contact windowSize={this.state.windowSize} {...props} />}
                />
                {/*<Route
                  path='/video'
                  exact={true}
                  render={(props) => isAuthenticated ? <Video windowSize={this.state.windowSize} {...props} /> : <Redirect to='/login' />}
                />*/}
              </Switch>
            </Suspense>
          )
        }
        </main>
        <Footer windowSize={this.state.windowSize} />
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
