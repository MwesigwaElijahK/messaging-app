import firebase from "firebase"

//configuration keys for our message up
const firebaseConfig = {
    apiKey: "AIzaSyAclvDaBVXTaGxrY5jaluZ8G2UNqlSV3U4",
    authDomain: "message-application-6449a.firebaseapp.com",
    projectId: "message-application-6449a",
    storageBucket: "message-application-6449a.appspot.com",
    messagingSenderId: "957250375163",
    appId: "1:957250375163:web:91ff153600837481500f5e",
    measurementId: "G-1BHY9CERNM"
  };

// code to initialise app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// invoking our database
const db = firebaseApp.firestore();

// invoking our authentication service 
const auth = firebase.auth();

// google auth provider service 
const provider = new firebase.auth.GoogleAuthProvider()

// exporting our instances so that we can use them anywhere in our project 
export {auth,provider};
export default db;