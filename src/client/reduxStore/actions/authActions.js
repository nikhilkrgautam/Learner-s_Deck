
import * as ACTIONS from './actionTypes';
import axios from 'axios';

export const logInUser = (cred) => {

  return (dispatch) => {
    // axios.get('/api/ping').then(res => {
    //   console.log(res);
    // });
    axios.post('/api/auth/login', cred, {
      headers: {
        "Content-Type": "application/json"
      }

    }).then(res => {

      // localStorage.setItem("token", res.data.token);

      dispatch({ type: ACTIONS.LOGIN_SUCCESS, payload: res.data.token });

    }).catch(err => {
      console.error(err);
      dispatch({ type: ACTIONS.LOGIN_ERR });
    });
  }
}

export const signUpUser = (cred) => {
  return (dispatch) => {

    axios.post('/api/auth/register', cred, {
      headers: {
        "Content-Type": "application/json"
      }

    }).then(res => {

      // localStorage.setItem("token", res.data.token);

      dispatch({ type: ACTIONS.SIGNUP_SUCCESS, payload: res.data.token });

    }).catch(err => {
      console.error(err);
      dispatch({ type: ACTIONS.SIGNUP_ERR });
    });

  }
}

export const isLoggedIn = () => {
  return (dispatch) => {
    // const token = localStorage.token;

    // axios.get('/api/auth/is-verify', {
    //   headers: {
    //     token: token
    //   }
    // })

    axios.get('/api/auth/is-verify').then(res => {

      dispatch({ type: ACTIONS.LOGIN_SUCCESS });

    }).catch(err => {
      console.error(err);
      dispatch({ type: ACTIONS.LOGIN_ERR });
    });
  }
}

export const logOut = () => {
  return (dispatch) => {
    axios.get('/api/auth/logout').then(res => {

      dispatch({ type: ACTIONS.LOGOUT_SUCCESS });
      dispatch({ type: ACTIONS.GET_DATA_ERR });

    }).catch(err => {
      console.error(err);
    });

    // localStorage.removeItem("token");
    // dispatch({ type: ACTIONS.LOGOUT_SUCCESS });
  }
}
