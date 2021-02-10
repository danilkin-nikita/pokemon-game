import {useState, useEffect} from 'react';
import Layout from '../../components/LayoutBlock';
import PokemonCard from '../../components/PokemonCard';
import database from '../../service/firebase';
import style from './style.module.css';

const GamePage = () => {

  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    database.ref('pokemons').once('value', (snapshot) => {
      setPokemons(snapshot.val());
    });
  }, [pokemons]);

  const activeCardState = (id) => {
    setPokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
          const pokemon = {...item[1]};
          if (pokemon.id === id) {
            database.ref('pokemons/' + item[0]).set({
              ...pokemon,
              active: !pokemon.active
            });
              
          };
        
          acc[item[0]] = pokemon;

          return acc;
      }, {});
    });
  };

  const addPokemon = () => {
    const data = {
        "abilities": [
        "keen-eye",
        "tangled-feet",
        "big-pecks"
      ],
      "stats": {
        "hp": 63,
        "attack": 60,
        "defense": 55,
        "special-attack": 50,
        "special-defense": 50,
        "speed": 71
      },
      "type": "flying",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
      "name": "pidgeotto",
      "base_experience": 122,
      "height": 11,
      "id": 17,
      "values": {
        "top": "A",
        "right": 2,
        "bottom": 7,
        "left": 5
      }
    };

    const newKey = database.ref().child('pokemons').push().key;
    database.ref('pokemons/' + newKey).set(data);
  };

  return (
    <>
       <Layout
          id="cards"
          title="Game"
          colorBg="#202736"
          titleColor="#fff"
        >
          <button className={style.NewPokemonBtn} onClick={addPokemon}>Add New Pokemon</button>
          <div className={style.flex}>
              {
                Object.entries(pokemons).map(([key, {name, img, id, type, values, active}]) => 
                <PokemonCard 
                  key={key}
                  id={id}
                  name={name}
                  values={values}
                  img={img}
                  type={type}
                  onClickCard={(id) => activeCardState(id)}
                  isActive={active}/>)
              }
          </div>
     </Layout>
    </>
  )
}

export default GamePage;