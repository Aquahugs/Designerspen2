 import firebase from 'firebase/app'
 import'firebase/firestore'
 import 'firebase/auth'
 
 
 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCjKENzxdzGbpNEO7lpZ6ct5v2SDt6jy_8",
    authDomain: "designerspen2.firebaseapp.com",
    databaseURL: "https://designerspen2.firebaseio.com",
    projectId: "designerspen2",
    storageBucket: "gs://designerspen2.appspot.com/",
    messagingSenderId: "791462166450"
  };
  
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;