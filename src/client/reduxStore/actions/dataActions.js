
import * as ACTIONS from './actionTypes';
import axios from 'axios';

export const getData = () => {
  return (dispatch) => {
    // const token = localStorage.token;

    // axios.get('/api/dash/', {
    //   headers: {
    //     token: token
    //   }
    // })

    axios.get('/api/dash/').then(res => {

      dispatch({ type: ACTIONS.GET_DATA_SUCCESS, payload: res.data });

    }).catch(err => {
      console.error(err);
      dispatch({ type: ACTIONS.GET_DATA_ERR });
    });
  }
}
