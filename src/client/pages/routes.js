
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/signup',
    component: Signup
  },
  {
    path: '/profile',
    component: Profile
  }
];

export default routes;
