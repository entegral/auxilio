import authReducer from './auth-reducer';

describe('authReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(authReducer({}, {
      type: null
    })).toEqual({});
  });

  test('Should return default state if no action type is recognized', () => {
    expect(authReducer({}, {
      type: null
    })).toEqual({});
  });
  
  



});