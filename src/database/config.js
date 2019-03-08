import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyA2jj1i9yZIdE3T5KFV_QISx1Rq-epCugA",
    authDomain: "photo-saver-951b9.firebaseapp.com",
    databaseURL: "https://photo-saver-951b9.firebaseio.com",
    projectId: "photo-saver-951b9",
    storageBucket: "photo-saver-951b9.appspot.com",
    messagingSenderId: "592730023977"
  }
  

  firebase.initializeApp(config)
  const database = firebase.database()
  const fb = firebase.auth()
  export {fb,database}