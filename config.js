import firebase from 'firebase'

  var firebaseConfig = {
    apiKey: "AIzaSyBjlWXcCJ6Z7p0uAektjUJCs36KStFGYuQ",
    authDomain: "school-attendance-app-13b49.firebaseapp.com",
    databaseURL: "https://school-attendance-app-13b49-default-rtdb.firebaseio.com",
    projectId: "school-attendance-app-13b49",
    storageBucket: "school-attendance-app-13b49.appspot.com",
    messagingSenderId: "292959120662",
    appId: "1:292959120662:web:5fcd4765761b8a5ec33437",
    measurementId: "G-3NYGZ2150T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export default firebase.database();