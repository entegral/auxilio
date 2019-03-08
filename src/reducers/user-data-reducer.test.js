import userDataReducer from './user-data-reducer';
import {getUserDataAction} from '../actions/userDataActions';

describe('authReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(userDataReducer({}, {
      type: null
    })).toEqual({});
  });

  test('Should return data of specified test user', () => {
    let userDataPromise = getUserDataAction('3');
    expect(userDataPromise.then((userData)=>{
      expect(userDataReducer({}, userData)).toEqual({});
    })).toEqual({})
  });

});