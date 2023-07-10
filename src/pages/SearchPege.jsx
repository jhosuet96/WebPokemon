import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CardPokemon } from '../components';
import { PokemonContext } from '../context/PokemonContext';
import { Pokeinfo } from '../pages/Pokeinfo';

export const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { globalPokemons, pokeDex, setPokeDex } = useContext(PokemonContext);

  const filteredPokemons = globalPokemons.filter(pokemon =>
    pokemon.name.includes(location.state.toLowerCase())
  );

  const uniquePokemons = Array.from(new Set(filteredPokemons.map(pokemon => pokemon.id)))
    .map(id => {
      return filteredPokemons.find(pokemon => pokemon.id === id);
    });

  const handleGoBack = () => {
    navigate("/");
  };

  return (
	<>
		<div className='container'>
		<div className="left-content">
			<p className='p-search'>
			Se encontraron <span>{uniquePokemons.length}</span> resultados:
			</p>
			<div className='card-list-pokemon container'>
			{uniquePokemons.map((pokemon, index) => (
				<CardPokemon pokemon={[pokemon]} key={index} infoPokemon={poke => setPokeDex(poke)} />
			))}
			</div>
		</div>
		<div className="right-content">
			<Pokeinfo data={pokeDex} />
		</div>
		</div>
		<button className='btn btn-netx' onClick={handleGoBack}>Volver</button>
	</>

  );
};
