
import * as ACTIONS from './actionTypes';
import axios from 'axios';

export const logInUser = (cred) => {
  console.log(cred);
  return (dispatch) => {
    axios.get('/api/hello').then(res => {
      console.log(res);
      dispatch({ type: ACTIONS.LOGIN_SUCCESS , payload: cred });
    });
  }
}

export const signUpUser = (cred) => {
  return (dispatch) => {
    dispatch({ type: ACTIONS.SIGNUP_SUCCESS });
  }
}

export const logOut = () => {
  return (dispatch) => {
    dispatch({ type: ACTIONS.LOGOUT_SUCCESS });
  }
}
