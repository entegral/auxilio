import userDataReducer from './user-data-reducer';
import {getUserDataAction} from '../actions/userDataActions';

describe('authReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(userDataReducer({}, {
      type: null
    })).toEqual({});
  });

  test('Should return data of specified test user', () => {
    let userData; 
    getUserDataAction('3').then((json)=>{
      userData = json;
      console.log(userData);
      return expect(userDataReducer({}, userData)).toEqual({});
    })
    
  });

});