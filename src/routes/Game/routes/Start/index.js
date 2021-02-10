import {useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import Layout from '../../../../components/LayoutBlock';
import PokemonCard from '../../../../components/PokemonCard';
import {FireBaseContext} from '../../../../context/firebaseContext';
import {PokemonContext} from '../../../../context/pokemonContext';
import style from './style.module.css';

const StartPage = () => {
  const firebase = useContext(FireBaseContext);
  const pokemonContext = useContext(PokemonContext);
  const history = useHistory();
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons);
    });

    return () => firebase.offPokemonSoket();
  }, []);

  const handleChangeSelected = (key) => {
    const pokemon = {...pokemons[key]};
    pokemonContext.onSelectedPokemons(key, pokemon);
    setPokemons(prevState => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected
      }
    }));
  };

  const handleStartGameClick = () => {
    history.push('/game/board');
  };

  return (
    <>
       <Layout
          id="cards"
          title="Game"
          colorBg="#202736"
          titleColor="#fff"
        >
          <button 
            className={style.NewPokemonBtn} 
            onClick={handleStartGameClick}
            disabled={Object.keys(pokemonContext.pokemon).length < 5}
          >
            Start Game
          </button>
          <div className={style.flex}>
              {
                Object.entries(pokemons).map(([key, {name, img, id, type, values, selected}]) => 
                <PokemonCard
                  className={style.card} 
                  key={key}
                  id={id}
                  name={name}
                  values={values}
                  img={img}
                  type={type}
                  onClickCard={() => {
                    if (Object.keys(pokemonContext.pokemon).length < 5 || selected) {
                      handleChangeSelected(key)
                    }
                  }}
                  isActive={true}
                  isSelected={selected}/>)
              }
          </div>
     </Layout>
    </>
  )
}

export default StartPage;