
import authReducer from './authReducer';
import dataReducer from './dataReducer';
import fileReducer from './fileReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
  file: fileReducer
});

export default rootReducer;
