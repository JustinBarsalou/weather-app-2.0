import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyBk7kXZPUBUqLRyIULqj1NgWgO_n0n6OkY",
  authDomain: "weather-app-a07f3.firebaseapp.com",
  databaseURL: "https://weather-app-a07f3.firebaseio.com",
  projectId: "weather-app-a07f3",
  storageBucket: "weather-app-a07f3.appspot.com",
  messagingSenderId: "480436789041",
  appId: "1:480436789041:web:97a41fed4cc43ef53a1a10",
  measurementId: "G-GCRLEDWDZW"
};
const fire = firebase.initializeApp(config);
export default fire;