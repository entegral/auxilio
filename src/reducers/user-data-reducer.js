
export default (state = {}, action) => {
  let newState;
  switch (action.type) {
    case 'GET_USER_DATA':
      newState = {
        ...state,
        userData: action.userData
      }
      return newState;
    default:
      return state;
  }
};
