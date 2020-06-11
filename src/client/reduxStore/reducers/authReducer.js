
const initState = {

}

const authReducer = (state = initState, action) => {

  if(action.type === 'LOGIN_SUCCESS') {
    console.log('Login success!');
    return {
      ...state,
    }
  }

  else if(action.type === 'LOGIN_ERR') {
    console.log('Login failed!');
    return {
      ...state,
    }
  }

  if(action.type === 'SIGNUP_SUCCESS') {
    console.log('Signup success!');
    return {
      ...state,
    }
  }

  else if(action.type === 'SIGNUP_ERR') {
    console.log('Signup failed!');
    return {
      ...state,
    }
  }

  else if(action.type === 'LOGOUT_SUCCESS') {
    console.log('Logout success!');
    return state;
  }

  else {
    return state;
  }
}

export default authReducer;
