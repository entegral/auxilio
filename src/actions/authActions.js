import {loginUser, signUp, signOut } from '../apis/firebase';

export function loginAction(email, password) {
  const loginCredential = loginUser(email, password);
  return loginCredential.then((content) => {
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
    return ({
      type: 'REGISTER_NEW_USER',
      email: email,
      uid: content.user.uid
    });
  })
}

export function clearAuthData() {
  signOut();
  return {
    type: 'LOGOUT',
    email: null,
    uid: null
  }
}
