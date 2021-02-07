import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCaH-Y9tKnfam8JWF7nzPLTO78eaJvl65k",
    authDomain: "pokemon-game-41350.firebaseapp.com",
    databaseURL: "https://pokemon-game-41350-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-41350",
    storageBucket: "pokemon-game-41350.appspot.com",
    messagingSenderId: "636290138866",
    appId: "1:636290138866:web:6f8d6bd43de5c26bea866b"
  };

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;