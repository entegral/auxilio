import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAif6l7pSB1-rksDIoDJ2gAti5IGc_gIYc",
  authDomain: "heretoauxilio.firebaseapp.com",
  databaseURL: "https://heretoauxilio.firebaseio.com",
  projectId: "heretoauxilio",
  storageBucket: "heretoauxilio.appspot.com",
  messagingSenderId: "195637930384"
};

firebase.initializeApp(firebaseConfig);

export function loginUser(email, password){
  const userCredential = firebase.auth().signInWithEmailAndPassword(email, password);
  return userCredential;
};

export function signUp(email, password) {
  const userCredential = firebase.auth().createUserWithEmailAndPassword(email, password);
  return userCredential;
}

export function signOut(){
  firebase.auth().signOut()
}