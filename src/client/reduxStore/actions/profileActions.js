
import * as ACTIONS from './actionTypes';
import axios from 'axios';

export const resetNotes = () => {
  return (dispatch) => {
    dispatch({ type: ACTIONS.PROFILE_NOTE_RESET });
  }
}

export const updateImage = (imageData) => {

  return (dispatch) => {

    axios.put('/api/dash/updateImage', imageData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }

    }).then(res => {
      console.log(res.data);
      dispatch({ type: ACTIONS.UPDATE_PROIMG_SUCCESS });
      dispatch({ type: ACTIONS.IMAGE_UPDATE, payload: res.data });

    }).catch(err => {
      console.log(err.response);

      if(err.response.status === 406) {
        dispatch({ type: ACTIONS.UPDATE_PROIMG_ERR, payload: err.response.data });
      } else {
        dispatch({ type: ACTIONS.UPDATE_PROIMG_ERR, payload: 'There was some error, please try again.' });
      }
    });
  }
}

export const updateInfo = (data) => {

  return (dispatch) => {

    axios.put('/api/dash/updateInfo', data, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      console.log(res.data);
      dispatch({ type: ACTIONS.UPDATE_INFO_SUCCESS });
      if(res.data.type === 'Class') {
        dispatch({ type: ACTIONS.CLASS_UPDATE, payload: res.data.data });
      }
      else if(res.data.type === 'School') {
        dispatch({ type: ACTIONS.SCHOOL_UPDATE, payload: res.data.data });
      }
      else if(res.data.type === 'Degree') {
        dispatch({ type: ACTIONS.DEGREE_UPDATE, payload: res.data.data });
      }
      else if(res.data.type === 'Experience') {
        dispatch({ type: ACTIONS.EXPERIENCE_UPDATE, payload: res.data.data });
      }

    }).catch(err => {
      console.log(err.response);

      dispatch({ type: ACTIONS.UPDATE_INFO_ERR, payload: 'There was some error while updating details, please try again.' });
    });
  }
}
