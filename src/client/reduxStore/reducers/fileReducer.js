
import * as ACTIONS from '../actions/actionTypes';

const initState = {
  fileError: null,
  fileSent: null
}

const fileReducer = (state = initState, action) => {

  if(action.type === ACTIONS.SEND_FILE_SUCCESS) {
    console.log('File uploaded successfully!');
    return {
      ...state,
      fileError: null,
      fileSent: true
    }
  }

  else if(action.type === ACTIONS.SEND_FILE_ERR) {
    console.log('File upload failed!');
    return {
      ...state,
      fileError: action.payload,
      fileSent: null
    }
  }

  else {
    return state;
  }
}

export default fileReducer;
