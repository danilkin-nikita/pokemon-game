import {useState, useEffect, useContext} from 'react';
import Layout from '../../../../components/LayoutBlock';
import PokemonCard from '../../../../components/PokemonCard';
import {FireBaseContext} from '../../../../context/firebaseContext';
import {PokemonContext} from '../../../../context/pokemonContext';
import style from './style.module.css';

const StartPage = () => {
  const firebase = useContext(FireBaseContext);
  const [pokemons, setPokemons] = useState({});
  const pokemonContext = useContext(PokemonContext);

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons);
    });
  }, []);

  const handleChangeActive = (id) => {
    setPokemons(prevState => {
     
      return Object.entries(prevState).reduce((acc, item) => {
          const pokemon = {...item[1]};
          if (pokemon.id === id) {
            pokemon.selected = !pokemon.selected;
            if (pokemon.selected === true) {
              // pokemonContext.handlerIsSelect();
            }
          }

          acc[item[0]] = pokemon;

          const selectPokemon = Object.values(pokemons).filter(item => item.selected);
          pokemonContext.handlerIsSelect(selectPokemon);

          // firebase.postPokemon(item[0], pokemon);
          
          return acc;
      }, {});
    });
  };

  

  const handleAddPokemon = () => {
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

    firebase.addPokemon(data, () => {});
  };

  return (
    <>
       <Layout
          id="cards"
          title="Game"
          colorBg="#202736"
          titleColor="#fff"
        >
          <button className={style.NewPokemonBtn} onClick={handleAddPokemon}>Add New Pokemon</button>
          <div className={style.flex}>
              {
                Object.entries(pokemons).map(([key, {name, img, id, type, values, active, selected}]) => 
                <PokemonCard 
                  key={key}
                  id={id}
                  name={name}
                  values={values}
                  img={img}
                  type={type}
                  onClickCard={(id) => handleChangeActive(id)}
                  isActive={active}
                  inSelected={selected}/>)
              }
          </div>
     </Layout>
    </>
  )
}

export default StartPage;