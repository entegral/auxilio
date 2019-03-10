
export default (state = {}, action) => {
  let newState;
  switch (action.type) {
    case 'GET_USER_DATA':
      console.log('reducer user data', action.userData)
      const { email, uid, first_name, last_name, first_year_enrolled, first_year_worked } = action.userData;
      newState = {
        ...state,
        email: email,
        uid: uid,
        first_name: first_name,
        last_name: last_name,
        first_year_enrolled: first_year_enrolled,
        first_year_worked: first_year_worked
      }
      return newState;
    case 'CLEAR_USER_DATA':
      return {}
    default:
      return state;
  }
};
