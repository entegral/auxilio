import authReducer from './auth-reducer';
import {loginAction, signUpAction} from '../actions/authActions';

describe('authReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(authReducer({}, {
      type: null
    })).toEqual({});
  });

  test('Should update uid slice of state with a user\'s firebase UID', () => {
    const actionPromise = loginAction('e2robby@gmail.com', 'password');
    actionPromise.then((action) => {
      console.log('action', action);
      expect(authReducer({}, action)).toEqual({
        userId: {
          email: 'e2robby@gmail.com',
          uid: '5dYxOi33FlU8lp9ADd5Sq3xxSGl2'
        }
      });
    });
  });

  test('Should add new user to firebase and assign their uid to redux state', () => {
    const actionPromise = signUpAction('test@gmail.com', 'password');
    actionPromise.then((action) => {
      console.log(action);
      expect(authReducer({}, action)).toEqual({
        userId: {
          email: 'test@gmail.com',
          uid: expect.any(String)
        }
      });
    });
  });



});