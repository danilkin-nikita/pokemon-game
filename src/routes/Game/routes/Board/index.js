import {useContext} from 'react';
import {PokemonContext} from '../../../../context/pokemonContext';
import PokemonCard from '../../../../components/PokemonCard';
import s from './style.module.css';

const BoardPage = () => {
    const {pokemon} = useContext(PokemonContext);
    
    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                {
                    Object.values(pokemon).map(({id, name, img, type, values}) => (
                        <PokemonCard
                            className={s.card} 
                            key={id}
                            id={id}
                            name={name}
                            values={values}
                            img={img}
                            type={type}
                            minimize
                            isActive
                        />
                    ))
                }
            </div>
            <div className={s.board}>
                <div className={s.boardPlate}>1</div>
                <div className={s.boardPlate}>2</div>
                <div className={s.boardPlate}>3</div>
                <div className={s.boardPlate}>4</div>
                <div className={s.boardPlate}>5</div>
                <div className={s.boardPlate}>6</div>
                <div className={s.boardPlate}>7</div>
                <div className={s.boardPlate}>8</div>
                <div className={s.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;