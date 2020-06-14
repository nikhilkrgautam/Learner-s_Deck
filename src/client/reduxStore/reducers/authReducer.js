
import * as ACTIONS from '../actions/actionTypes';

const initState = {
  isAuthenticated: false
}

const authReducer = (state = initState, action) => {

  if(action.type === ACTIONS.LOGIN_SUCCESS) {
    console.log('Login success!');
    return {
      ...state,
      isAuthenticated: true
    }
  }

  else if(action.type === ACTIONS.LOGIN_ERR) {
    console.log('Login failed!');
    return {
      ...state,
      isAuthenticated: false
    }
  }

  if(action.type === ACTIONS.SIGNUP_SUCCESS) {
    console.log('Signup success!');
    return {
      ...state,
      isAuthenticated: true
    }
  }

  else if(action.type === ACTIONS.SIGNUP_ERR) {
    console.log('Signup failed!');
    return {
      ...state,
      isAuthenticated: false
    }
  }

  else if(action.type === ACTIONS.LOGOUT_SUCCESS) {
    console.log('Logout success!');
    return {
      ...state,
      isAuthenticated: false
    }
  }

  else {
    return state;
  }
}

export default authReducer;
