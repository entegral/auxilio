import {loginUser} from '../components/firebase';

export function loginAction (email, password) {
  const loginCredential = loginUser(email, password);
  return loginCredential.then((content) => {
    console.log(content);
    return(
      { 
        type: 'SET_CURRENT_USER', 
        email: email, 
        uid: content.user.uid
      });
  })

}