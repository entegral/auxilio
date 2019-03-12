import authReducer from './auth-reducer';
import { combineReducers } from 'redux';
import userDataReducer from './user-data-reducer';
import errorReducer from './error-reducer';
import organizationReducer from './organization-reducer';

const rootReducer = combineReducers({
  userAuthData: authReducer,
  userData: userDataReducer,
  errors: errorReducer,
  orgs: organizationReducer
});

export default rootReducer;