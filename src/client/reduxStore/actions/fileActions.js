
import * as ACTIONS from './actionTypes';
import axios from 'axios';

export const sendFile = (file) => {

  return (dispatch) => {

    axios.post('/api/file/uploadLarge', file, {
      headers: {
        "Content-Type": "multipart/form-data"
      }

    }).then(res => {
      console.log(res.data);
      dispatch({ type: ACTIONS.SEND_FILE_SUCCESS });

    }).catch(err => {
      console.log(err.response);
      console.error(err);

      // if(err.response.status === 406) {
      //   dispatch({ type: ACTIONS.SEND_FILE_ERR, payload: err.response.data });
      // } else {
        dispatch({ type: ACTIONS.SEND_FILE_ERR, payload: 'There was some error, please try again.' });
      // }
    });
  }
}
