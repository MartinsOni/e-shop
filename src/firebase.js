import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD023TPYw9DVhP8-Um7eDoTYJO7nIOLx8g",
    authDomain: "electronicshop-76eeb.firebaseapp.com",
    projectId: "electronicshop-76eeb",
    storageBucket: "electronicshop-76eeb.appspot.com",
    messagingSenderId: "408458187780",
    appId: "1:408458187780:web:e6b4632947827f7b05d151",
    measurementId: "G-03FJNG89MH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore()

  const auth = firebase.auth()

  export {db, auth}