
import * as ACTIONS from '../actions/actionTypes';

const initState = {
  courseData: null,
  courseLoading: false
}

const courseReducer = (state = initState, action) => {

  if(action.type === ACTIONS.GET_COURSE_PHYSICS_SUCCESS) {
    console.log('Physics courses received!');
    return {
      ...state,
      courseData: {
        ...state.courseData,
        physics: action.payload
      }
    }
  }

  else if(action.type === ACTIONS.GET_COURSE_MATHS_SUCCESS) {
    console.log('Maths courses received!');
    return {
      ...state,
      courseData: {
        ...state.courseData,
        maths: action.payload
      }
    }
  }

  else if(action.type === ACTIONS.GET_COURSE_CHEMISTRY_SUCCESS) {
    console.log('Chemistry courses received!');
    return {
      ...state,
      courseData: {
        ...state.courseData,
        chemistry: action.payload
      }
    }
  }

  else if(action.type === ACTIONS.GET_COURSE_ERR) {
    console.log('Getting courses failed!');
    return {
      ...state
    }
  }

  else if(action.type === ACTIONS.COURSE_LOAD_ON) {
    return {
      ...state,
      courseLoading: true
    }
  }

  else if(action.type === ACTIONS.COURSE_LOAD_OFF) {
    return {
      ...state,
      courseLoading: false
    }
  }



  else {
    return state;
  }
}

export default courseReducer;
