import firebase from 'firebase/app'

import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyAFFNa0v6vWhZzcJVUGaaJ_iwskxE6dyxY",
  authDomain: "dashboard-2e624.firebaseapp.com",
  databaseURL: "https://dashboard-2e624.firebaseio.com",
  projectId: "dashboard-2e624",
  storageBucket: "dashboard-2e624.appspot.com",
  messagingSenderId: "243672370131",
  appId: "1:243672370131:web:77ba096871c9c94b10fd26"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {db}