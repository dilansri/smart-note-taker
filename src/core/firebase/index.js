import firebase from 'firebase'

try{
    var config = {
    apiKey: "",
    authDomain: "smart-note-taker.firebaseapp.com",
    databaseURL: "https://smart-note-taker.firebaseio.com",
    storageBucket: "smart-note-taker.appspot.com",
    messagingSenderId: ""
  };
  firebase.initializeApp(config);
}catch(e){

}

export const githubProvider = new firebase.auth.GithubAuthProvider()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const firebaseRef = firebase.database().ref()
export default firebase