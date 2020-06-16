
import * as ACTIONS from '../actions/actionTypes';

const initState = {
  userData: null
}

const dataReducer = (state = initState, action) => {

  if(action.type === ACTIONS.GET_DATA_SUCCESS) {
    console.log('Data received!');
    return {
      ...state,
      userData: action.payload
    }
  }

  else if(action.type === ACTIONS.GET_DATA_ERR) {
    console.log('Getting data failed!');
    return {
      ...state,
      userData: null
    }
  }

  else {
    return state;
  }
}

export default dataReducer;
