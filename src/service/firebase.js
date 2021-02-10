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

class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSoket = (cb) => {
    this.database.ref('pokemons').on('value', (snapshot) => {
      cb(snapshot.val());
    });
  }

  getPokemonsOnce = async () => {
    return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
  }

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon);
  }

  addPokemon = (data, cb) => {
    const newKey = this.database.ref().child('pokemons').push().key;
    this.database.ref('pokemons/' + newKey).set(data).then(() => cb());
  }
}

export default Firebase;