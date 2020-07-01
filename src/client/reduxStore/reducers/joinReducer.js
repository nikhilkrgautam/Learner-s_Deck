
import * as ACTIONS from '../actions/actionTypes';

const initState = {
  joinError: null,
  joined: false,
  isLoading: false
}

const joinReducer = (state = initState, action) => {

  if(action.type === ACTIONS.JOIN_SUCCESS) {
    console.log('Joined successfully!');
    return {
      ...state,
      joinError: null,
      joined: true
    }
  }

  else if(action.type === ACTIONS.JOIN_ERR) {
    console.log('Joining failed!');
    return {
      ...state,
      joinError: action.payload,
      joined: false
    }
  }

  else {
    return state;
  }
}

export default joinReducer;
