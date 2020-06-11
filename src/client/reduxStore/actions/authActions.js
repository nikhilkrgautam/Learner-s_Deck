
import axios from 'axios';

export const logInUser = (cred) => {
  return (dispatch) => {
    axios.get('/api/ping').then(res => {
      console.log(res);
      dispatch({ type: 'LOGIN_SUCCESS' });
    });
  }
}

export const signUpUser = (cred) => {
  return (dispatch) => {
    dispatch({ type: 'SIGNUP_SUCCESS' });
  }
}

export const logOut = () => {
  return (dispatch) => {
    dispatch({ type: 'LOGOUT_SUCCESS' });
  }
}
