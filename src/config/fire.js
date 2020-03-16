import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyB-YqX_PuxXmcE5aNYrtnpJGhUu0n_RqZ4",
    authDomain: "can-i-run-it.firebaseapp.com",
    databaseURL: "https://can-i-run-it.firebaseio.com",
    projectId: "can-i-run-it",
    storageBucket: "can-i-run-it.appspot.com",
    messagingSenderId: "519317524376",
    appId: "1:519317524376:web:21db2957a67629bd52a5ed",
    measurementId: "G-3117XZ4LV5"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;