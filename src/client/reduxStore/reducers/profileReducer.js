
import * as ACTIONS from '../actions/actionTypes';

const initState = {
  profileImageError: null,
  profileImageSent: null,
  profileInfoError: null,
  profileInfoSent: null
}

const profileReducer = (state = initState, action) => {

  if(action.type === ACTIONS.UPDATE_PROIMG_SUCCESS) {
    console.log('Image uploaded successfully!');
    return {
      ...state,
      profileImageError: null,
      profileImageSent: true
    }
  }

  else if(action.type === ACTIONS.UPDATE_PROIMG_ERR) {
    console.log('Image upload failed!');
    return {
      ...state,
      profileImageError: action.payload,
      profileImageSent: null
    }
  }

  if(action.type === ACTIONS.UPDATE_INFO_SUCCESS) {
    console.log('Info updated successfully!');
    return {
      ...state,
      profileInfoError: null,
      profileInfoSent: true
    }
  }

  else if(action.type === ACTIONS.UPDATE_INFO_ERR) {
    console.log('Info update failed!');
    return {
      ...state,
      profileInfoError: action.payload,
      profileInfoSent: null
    }
  }

  else if(action.type === ACTIONS.PROFILE_NOTE_RESET) {
    return {
      ...state,
      profileImageError: null,
      profileImageSent: null,
      profileInfoSent: null,
      profileInfoError: null
    }
  }

  else {
    return state;
  }
}

export default profileReducer;
