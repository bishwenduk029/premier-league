import { combineReducers } from 'redux';
import authReducers from './authReducers';
import matchReducers from './matchReducers';

export default combineReducers({
  auth: authReducers,
  cricket: matchReducers,
});
