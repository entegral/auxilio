import authReducer from './auth-reducer';
import { combineReducers } from 'redux';
import userDataReducer from './user-data-reducer';

const rootReducer = combineReducers({
  userAuthData: authReducer,
  userData: userDataReducer
});

export default rootReducer;