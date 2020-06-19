
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

  else if(action.type === ACTIONS.IMAGE_UPDATE) {
    return {
      ...state,
      userData: {
        ...state.userData,
        image: action.payload
      }
    }
  }

  else if(action.type === ACTIONS.SCHOOL_UPDATE) {
    return {
      ...state,
      userData: {
        ...state.userData,
        school: action.payload
      }
    }
  }

  else if(action.type === ACTIONS.CLASS_UPDATE) {
    return {
      ...state,
      userData: {
        ...state.userData,
        class: action.payload
      }
    }
  }

  else if(action.type === ACTIONS.DEGREE_UPDATE) {
    return {
      ...state,
      userData: {
        ...state.userData,
        degree: action.payload
      }
    }
  }

  else if(action.type === ACTIONS.EXPERIENCE_UPDATE) {
    return {
      ...state,
      userData: {
        ...state.userData,
        experience: action.payload
      }
    }
  }

  else {
    return state;
  }
}

export default dataReducer;
