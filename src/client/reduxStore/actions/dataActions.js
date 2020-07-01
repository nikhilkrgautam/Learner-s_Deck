
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
    dispatch({ type: ACTIONS.LOADING_ON });

    axios.get('/api/dash/').then(res => {
      console.log(res.data);

      dispatch({ type: ACTIONS.GET_DATA_SUCCESS, payload: res.data });
      dispatch({ type: ACTIONS.LOADING_OFF });

    }).catch(err => {
      console.error(err);
      dispatch({ type: ACTIONS.GET_DATA_ERR });
      dispatch({ type: ACTIONS.LOADING_OFF });
    });
  }
}
