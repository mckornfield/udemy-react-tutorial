import * as firebase from 'firebase';

var config = {
    apiKey: "REPLACE_ME",
    authDomain: "photowall-12f47.firebaseapp.com",
    databaseURL: "https://photowall-12f47.firebaseio.com",
    projectId: "photowall-12f47",
    storageBucket: "photowall-12f47.appspot.com",
    messagingSenderId: "1077382678672"
  };
  firebase.initializeApp(config);

  const database = firebase.database();

  export {database};
