import firebase from 'firebase/app'

import 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDEe_7FrD7VxfPXEDvR113woRNrmAr2HiI",
    authDomain: "dashboard-d3785.firebaseapp.com",
    projectId: "dashboard-d3785",
    storageBucket: "dashboard-d3785.appspot.com",
    messagingSenderId: "809341186806",
    appId: "1:809341186806:web:5fea53d25bfb78f45ff2d7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export {db}