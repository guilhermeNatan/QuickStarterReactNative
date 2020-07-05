import {combineReducers} from 'redux';
import userReducer from './userReducer';
import applicationReducer from './applicationReducer';

const rootReducer = combineReducers({
  user: userReducer,
  application: applicationReducer,
});

export default rootReducer;
