import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAc_jZapeyKfQc06p_7O7qdIYlqJVRyyVg",
  authDomain: "tbh-insta.firebaseapp.com",
  databaseURL: "https://tbh-insta.firebaseio.com",
  projectId: "tbh-insta",
  storageBucket: "tbh-insta.appspot.com",
  messagingSenderId: "761120644164"
  };

  var fire = firebase.initializeApp(config);

export default fire;