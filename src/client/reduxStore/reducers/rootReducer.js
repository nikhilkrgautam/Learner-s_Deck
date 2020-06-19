
import authReducer from './authReducer';
import dataReducer from './dataReducer';
import fileReducer from './fileReducer';
import profileReducer from './profileReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
  file: fileReducer,
  profile: profileReducer
});

export default rootReducer;
