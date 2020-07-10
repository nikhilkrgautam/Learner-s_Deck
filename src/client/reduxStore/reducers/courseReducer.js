
import * as ACTIONS from '../actions/actionTypes';

const initState = {
  coursesData: null,
  courseLoading: false,
  courseData: null,
  videosData: null,
  videosLoading: false,
  videoData: null
}

const courseReducer = (state = initState, action) => {

  if(action.type === ACTIONS.GET_COURSE_SUCCESS) {
    console.log('Course data received!');
    return {
      ...state,
      courseData: action.payload
    }
  }

  else if(action.type === ACTIONS.GET_COURSE_PHYSICS_SUCCESS) {
    console.log('Physics courses received!');
    return {
      ...state,
      coursesData: {
        ...state.coursesData,
        physics: action.payload
      }
    }
  }

  else if(action.type === ACTIONS.GET_COURSE_MATHS_SUCCESS) {
    console.log('Maths courses received!');
    return {
      ...state,
      coursesData: {
        ...state.coursesData,
        maths: action.payload
      }
    }
  }

  else if(action.type === ACTIONS.GET_COURSE_CHEMISTRY_SUCCESS) {
    console.log('Chemistry courses received!');
    return {
      ...state,
      coursesData: {
        ...state.coursesData,
        chemistry: action.payload
      }
    }
  }

  else if(action.type === ACTIONS.GET_VIDEO_SUCCESS) {
    console.log('Video data received!');
    return {
      ...state,
      videoData: action.payload
    }
  }

  else if(action.type === ACTIONS.GET_VIDEOS_SUCCESS) {
    console.log('Videos data received!');
    return {
      ...state,
      videosData: action.payload
    }
  }

  else if(action.type === ACTIONS.GET_COURSE_ERR) {
    console.log('Getting courses failed!');
    return {
      ...state
    }
  }

  else if(action.type === ACTIONS.GET_VIDEOS_ERR) {
    console.log('Getting videos failed!');
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

  else if(action.type === ACTIONS.VIDEOS_LOAD_ON) {
    return {
      ...state,
      videosLoading: true
    }
  }

  else if(action.type === ACTIONS.VIDEOS_LOAD_OFF) {
    return {
      ...state,
      videosLoading: false
    }
  }

  else {
    return state;
  }
}

export default courseReducer;
