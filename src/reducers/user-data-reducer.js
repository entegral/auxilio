
export default (state = {}, action) => {
  let newState;
  switch (action.type) {
    case 'GET_USER_DATA':
      console.log('reducer user data', action.userData)
      const { email, id, uid, first_name, last_name } = action.userData;
      newState = {
        ...state,
        email: email,
        uid: uid,
        first_name: first_name,
        last_name: last_name,
        id: id
      }
      return newState;
    case 'CLEAR_USER_DATA':
      return {}
    default:
      return state;
  }
};
