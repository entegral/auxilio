import {loginUser, signUp, signOut } from '../components/firebase';

export function loginAction(email, password) {
  const loginCredential = loginUser(email, password);
  return loginCredential.then((content) => {
    console.log(content);
    return ({
      type: 'SET_CURRENT_USER',
      email: email,
      uid: content.user.uid
    });
  })
}

export function signUpAction(email, password) {
  const signUpCredential = signUp(email, password);
  return signUpCredential.then((content) => {
    console.log('signup action content', content);
    return ({
      type: 'REGISTER_NEW_USER',
      email: email,
      uid: content.user.uid
    });
  })
}

export function logout() {
  signOut();
  return {
    type: 'LOGOUT',
    email: '',
    uid: ''
  }
}
