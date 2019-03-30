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
    case 'UPDATE_SUGGESTED_SUBS':
      newState = {
        ...state,
        suggested: action.orgs
      }
      return newState;
    case 'SET_CURRENT_ORG':
      newState = {
        ...state,
        currentOrgUid: action.orgUid
      }
      return newState;
    default:
      return state;
  }
};