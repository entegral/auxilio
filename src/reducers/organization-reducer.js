export default (state = {}, action) => {
  let newState;
  switch (action.type) {
    case 'UPDATE_USER_SUBS':
      
      newState = {
        ...state,
      subscribed: action.orgs
      }
      return newState;
    case 'CLEAR_USER_DATA':
      return {}
    default:
      return state;
  }
};