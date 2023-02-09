import firebase from "firebase/compat/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABKNNdj6WnE56vjmdZxqjxewuNkOR3a5E",
  authDomain: "twitter-clone-7ce48.firebaseapp.com",
  projectId: "twitter-clone-7ce48",
  storageBucket: "twitter-clone-7ce48.appspot.com",
  messagingSenderId: "45284060515",
  appId: "1:45284060515:web:87f3b67ac11821c4dcf756",
  measurementId: "G-XJ390M17JH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db