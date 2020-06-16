
import * as ACTIONS from '../actions/actionTypes';

const initState = {
  isAuthenticated: false,
  token: null
}

const authReducer = (state = initState, action) => {

  if(action.type === ACTIONS.LOGIN_SUCCESS) {
    console.log('Login success!');
    return {
      ...state,
      isAuthenticated: true,
      token: action.payload
    }
  }

  else if(action.type === ACTIONS.LOGIN_ERR) {
    console.log('Login failed!');
    return {
      ...state,
      isAuthenticated: false,
      token: null
    }
  }

  if(action.type === ACTIONS.SIGNUP_SUCCESS) {
    console.log('Signup success!');
    return {
      ...state,
      isAuthenticated: true,
      token: action.payload
    }
  }

  else if(action.type === ACTIONS.SIGNUP_ERR) {
    console.log('Signup failed!');
    return {
      ...state,
      isAuthenticated: false,
      token: null
    }
  }

  else if(action.type === ACTIONS.LOGOUT_SUCCESS) {
    console.log('Logout success!');
    return {
      ...state,
      isAuthenticated: false,
      token: null
    }
  }

  else {
    return state;
  }
}

export default authReducer;
