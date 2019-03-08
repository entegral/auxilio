import { getUserData } from '../apis/auxilioServerApi';

export function getUserDataAction(uid){
  const userDataPromise = getUserData(uid);
  return userDataPromise.then((jsonResponse)=>{
    console.log('userdata action ', jsonResponse)
    return {
      type: 'GET_USER_DATA',
      userData: jsonResponse
    }
  })
}