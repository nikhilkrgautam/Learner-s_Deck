
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';

export default createStore(rootReducer, applyMiddleware(thunk));
