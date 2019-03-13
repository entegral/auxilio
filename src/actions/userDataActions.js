
export function getUserDataAction(userData){
  return {
    type: 'GET_USER_DATA',
    userData: userData
  };
}
 

export function saveUserDataAction(userData) {
  return {
    type: 'GET_USER_DATA',
    userData: userData
  };
};

export function clearUserData(){
  return {
    type: 'CLEAR_USER_DATA',
  }
}