
import * as ACTIONS from './actionTypes';
import axios from 'axios';

export const sendFile = (imageData) => {

  return (dispatch) => {

    axios.post('/api/file/upload', imageData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }

    }).then(res => {
      console.log(res.data);
      dispatch({ type: ACTIONS.SEND_FILE_SUCCESS });

    }).catch(err => {
      console.log(err.response);

      if(err.response.status === 406) {
        dispatch({ type: ACTIONS.SEND_FILE_ERR, payload: err.response.data });
      } else {
        dispatch({ type: ACTIONS.SEND_FILE_ERR, payload: 'There was some error, please try again.' });
      }
    });
  }
}
