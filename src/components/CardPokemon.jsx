import React, { useState } from 'react';

export const CardPokemon = ({ pokemon, infoPokemon }) => {
  const [duplicatedIds, setDuplicatedIds] = useState([]);

  const handleInfoPokemon = (item) => {
    setDuplicatedIds((prevIds) => [...prevIds, item.id]);
    infoPokemon(item);
  };


  return (
    <>
      {pokemon.map((item) => {
        const isDuplicated = duplicatedIds.includes(item.id);

        return (
          <div key={item.id} className={`card-pokemon ${isDuplicated ? 'duplicated' : ''}`}>
            <div className='card-img' onClick={() => handleInfoPokemon(item)}>
                {
                    item.sprites.other.dream_world.front_default != null &&
                    <img
                        src={item.sprites.other.dream_world.front_default}
                        alt={`pokemon ${item.name}`}
                    />
                }
                {
                    item.sprites.other.dream_world.front_default == null &&
                    <img
                        src={item.sprites.front_default}
                        alt={`pokemon ${item.name}`}
                    />
                }
            </div>
            <div className='card-info'>
              <span className='pokemon-id'>N° {item.id}</span>
              <h3>{item.name}</h3>
              <div className='card-types'>
                {item.types.map((type) => (
                  <span key={type.type.name} className={type.type.name}>
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
