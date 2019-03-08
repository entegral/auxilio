export default (state = {}, action ) => {
  let newState;
  switch (action.type) {
    case 'SET_CURRENT_USER':
      newState = {...state, email: action.email, uid: action.uid}
      return newState;
    case 'REGISTER_NEW_USER':
      newState = {...state, email: action.email, uid: action.uid}
      return newState;
    case 'LOGOUT':
      newState = {...state, email: '', uid: ''}
      return newState;
    default:
      return state;
  }
};

