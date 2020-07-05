
import authReducer from './authReducer';
import dataReducer from './dataReducer';
import fileReducer from './fileReducer';
import profileReducer from './profileReducer';
import joinReducer from './joinReducer';
import courseReducer from './courseReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
  file: fileReducer,
  profile: profileReducer,
  join: joinReducer,
  course: courseReducer
});

export default rootReducer;
