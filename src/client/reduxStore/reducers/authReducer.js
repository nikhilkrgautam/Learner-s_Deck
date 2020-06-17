
import * as ACTIONS from '../actions/actionTypes';

const initState = {
  isAuthenticated: false,
  token: null,
  loginError: null,
  signupError: null
}

const authReducer = (state = initState, action) => {

  if(action.type === ACTIONS.LOGIN_SUCCESS) {
    console.log('Login success!');
    return {
      ...state,
      isAuthenticated: true,
      token: action.payload,
      loginError: null
    }
  }

  else if(action.type === ACTIONS.LOGIN_ERR) {
    console.log('Login failed!');
    return {
      ...state,
      isAuthenticated: false,
      token: null,
      loginError: action.payload
    }
  }

  if(action.type === ACTIONS.SIGNUP_SUCCESS) {
    console.log('Signup success!');
    return {
      ...state,
      isAuthenticated: true,
      token: action.payload,
      signupError: null
    }
  }

  else if(action.type === ACTIONS.SIGNUP_ERR) {
    console.log('Signup failed!');
    return {
      ...state,
      isAuthenticated: false,
      token: null,
      signupError: action.payload
    }
  }

  else if(action.type === ACTIONS.LOGOUT_SUCCESS) {
    console.log('Logout success!');
    return {
      ...state,
      isAuthenticated: false,
      token: null,
      loginError: null,
      signupError: null
    }
  }

  else {
    return state;
  }
}

export default authReducer;
