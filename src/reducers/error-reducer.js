export default (state = {}, action) => {
  let newState;
  switch (action.type) {
    case 'UPDATE_ERROR':
      newState = {...state, message: action.message}
      return newState;
    default:
      return state;
  }
}