import { getUserData } from '../apis/auxilioServerApi';
import { saveUserData } from '../apis/auxilioServerApi';

export function getUserDataAction(uid){
  const userDataPromise = getUserData(uid);
  return userDataPromise.then((jsonResponse)=>{
    console.log('userdata action ', jsonResponse)
    return {
      type: 'GET_USER_DATA',
      userData: jsonResponse
    };
  });
}

export function saveUserDataAction({email, uid}) {
  const userDataPromise = saveUserData(email, uid);
  return userDataPromise.then((userData) => {
    console.log(userData);
    return {
      type: 'GET_USER_DATA',
      userData: userData
    };
  });
}