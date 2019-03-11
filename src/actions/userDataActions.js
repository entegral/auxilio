import { getUserData } from '../apis/auxilioServerApi';
import { saveUserData } from '../apis/auxilioServerApi';
import { errorAction } from './errorActions';

export function getUserDataAction(uid){
  const userDataPromise = getUserData(uid);
  return userDataPromise.then((userData)=>{
    if (userData.message){
      return errorAction(userData.message);
    } else {
      return {
        type: 'GET_USER_DATA',
        userData: userData
      };
    }
  });
};

export function saveUserDataAction({email, uid}) {
  const userDataPromise = saveUserData(email, uid);
  return userDataPromise.then((userData) => {
    return {
      type: 'GET_USER_DATA',
      userData: userData
    };
  });
};

export function clearUserData(){
  return {
    type: 'CLEAR_USER_DATA',
  }
}