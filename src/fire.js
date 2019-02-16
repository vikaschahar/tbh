import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAK5237lBK9AwGdIYWy3pfEV9rm9hRQUPs",
    authDomain: "tbh-test1.firebaseapp.com",
    databaseURL: "https://tbh-test1.firebaseio.com",
    projectId: "tbh-test1",
    storageBucket: "tbh-test1.appspot.com",
    messagingSenderId: "295472752183"
  };

  var fire = firebase.initializeApp(config);

export default fire;