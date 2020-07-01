
import * as ACTIONS from './actionTypes';
import axios from 'axios';

export const joinUser = (cred) => {

  return (dispatch) => {

    axios.post('/api/auth/joinus', cred, {
      headers: {
        "Content-Type": "application/json"
      }

    }).then(res => {

      dispatch({ type: ACTIONS.JOIN_SUCCESS });

    }).catch(err => {
      if(err.response.status === 401) {
        dispatch({ type: ACTIONS.JOIN_ERR, payload: err.response.data });
      } else {
        dispatch({ type: ACTIONS.JOIN_ERR, payload: 'There was some error, please try again.' });
      }
    });
  }
}
