
import * as ACTIONS from './actionTypes';
import axios from 'axios';

export const getUserData = () => {
  return (dispatch) => {
    // const token = localStorage.token;

    // axios.get('/api/dash/', {
    //   headers: {
    //     token: token
    //   }
    // })
    dispatch({ type: ACTIONS.LOADING_ON });

    axios.get('/api/dash/').then(res => {
      // console.log(res.data);

      dispatch({ type: ACTIONS.GET_DATA_SUCCESS, payload: res.data });
      dispatch({ type: ACTIONS.LOADING_OFF });

    }).catch(err => {
      console.error(err);
      dispatch({ type: ACTIONS.GET_DATA_ERR });
      dispatch({ type: ACTIONS.LOADING_OFF });
    });
  }
}

export const getCoursesData = (subData) => {
  return (dispatch) => {

    dispatch({ type: ACTIONS.COURSE_LOAD_ON });

    axios.post('/api/courses/subject', subData, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      // console.log(res.data);
      if(subData.subject === 'Physics') {
        dispatch({ type: ACTIONS.GET_COURSE_PHYSICS_SUCCESS, payload: res.data });
      }
      else if(subData.subject === 'Chemistry') {
        dispatch({ type: ACTIONS.GET_COURSE_CHEMISTRY_SUCCESS, payload: res.data });
      }
      else if(subData.subject === 'Maths') {
        dispatch({ type: ACTIONS.GET_COURSE_MATHS_SUCCESS, payload: res.data });
      }

      dispatch({ type: ACTIONS.COURSE_LOAD_OFF });

    }).catch(err => {
      console.error(err);
      dispatch({ type: ACTIONS.GET_COURSE_ERR });
      dispatch({ type: ACTIONS.COURSE_LOAD_OFF });
    });
  }
}

export const getCourseData = (courseData) => {
  return (dispatch) => {

    dispatch({ type: ACTIONS.COURSE_LOAD_ON });

    axios.post('/api/courses/course', courseData, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      // console.log(res.data);

      dispatch({ type: ACTIONS.GET_COURSE_SUCCESS, payload: res.data });

      dispatch({ type: ACTIONS.COURSE_LOAD_OFF });

    }).catch(err => {
      console.error(err);
      dispatch({ type: ACTIONS.GET_COURSE_ERR });
      dispatch({ type: ACTIONS.COURSE_LOAD_OFF });
    });
  }
}

export const getVideosData = (videosData) => {
  return (dispatch) => {

    dispatch({ type: ACTIONS.VIDEOS_LOAD_ON });

    axios.post('/api/courses/videos', videosData, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      // console.log(res.data);

      dispatch({ type: ACTIONS.GET_VIDEOS_SUCCESS, payload: res.data });

      dispatch({ type: ACTIONS.VIDEOS_LOAD_OFF });

    }).catch(err => {
      console.error(err);
      dispatch({ type: ACTIONS.GET_VIDEOS_ERR });
      dispatch({ type: ACTIONS.VIDEOS_LOAD_OFF });
    });
  }
}

export const getVideoData = (videoData) => {
  return (dispatch) => {

    dispatch({ type: ACTIONS.VIDEOS_LOAD_ON });

    axios.post('/api/courses/video', videoData, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      // console.log(res.data);

      dispatch({ type: ACTIONS.GET_VIDEO_SUCCESS, payload: res.data });

      dispatch({ type: ACTIONS.VIDEOS_LOAD_OFF });

    }).catch(err => {
      console.error(err);
      dispatch({ type: ACTIONS.GET_VIDEOS_ERR });
      dispatch({ type: ACTIONS.VIDEOS_LOAD_OFF });
    });
  }
}

export const getAllVideos = () => {
  return (dispatch) => {

    dispatch({ type: ACTIONS.VIDEOS_LOAD_ON });

    axios.get('/api/courses/allVideos').then(res => {
      console.log(res.data);

      dispatch({ type: ACTIONS.GET_ALL_VIDEOS_SUCCESS, payload: res.data });

      dispatch({ type: ACTIONS.VIDEOS_LOAD_OFF });

    }).catch(err => {
      console.error(err);
      dispatch({ type: ACTIONS.GET_ALL_VIDEOS_ERR });
      dispatch({ type: ACTIONS.VIDEOS_LOAD_OFF });
    });
  }
}

export const clearVideo = () => {
  return (dispatch) => {

    dispatch({ type: ACTIONS.CLEAR_VIDEO });
  }
}
