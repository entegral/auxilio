import authReducer from './auth-reducer';
import { combineReducers } from 'redux';
import userDataReducer from './user-data-reducer';

const rootReducer = combineReducers({
  userId: authReducer,
  userData: userDataReducer
});

export default rootReducer;