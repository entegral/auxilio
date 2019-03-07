export default (state = {}, action ) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      let newState = {...state, email: action.email, uid: action.uid}
      return newState;
    default:
      return state;
  }
};

