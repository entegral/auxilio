import authReducer from './auth-reducer';
import {loginAction} from '../actions/authActions';

describe('authReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(authReducer({}, {
      type: null
    })).toEqual({});
  });

  test('Should update uid slice of state with a user\'s firebase UID', () => {
    const actionPromise = loginAction('e2robby@gmail.com', 'password');
    actionPromise.then((action) => {
      expect(authReducer({}, action)).toEqual({
        uid: '5dYxOi33FlU8lp9ADd5Sq3xxSGl2'
      });
    });
  });
  
  



});