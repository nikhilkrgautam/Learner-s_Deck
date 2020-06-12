
import * as ACTIONS from '../actions/actionTypes';

const initState = {
  name: null
}

const authReducer = (state = initState, action) => {

  if(action.type === ACTIONS.LOGIN_SUCCESS) {
    console.log('Login success!');
    return {
      ...state,
      name: action.payload
    }
  }

  else if(action.type === ACTIONS.LOGIN_ERR) {
    console.log('Login failed!');
    return {
      ...state,
    }
  }

  if(action.type === ACTIONS.SIGNUP_SUCCESS) {
    console.log('Signup success!');
    return {
      ...state,
    }
  }

  else if(action.type === ACTIONS.SIGNUP_ERR) {
    console.log('Signup failed!');
    return {
      ...state,
    }
  }

  else if(action.type === ACTIONS.LOGOUT_SUCCESS) {
    console.log('Logout success!');
    return {
      ...state,
    }
  }

  else {
    return state;
  }
}

export default authReducer;
