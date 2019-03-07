import authReducer from './auth-reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  userId: authReducer
});

export default rootReducer;