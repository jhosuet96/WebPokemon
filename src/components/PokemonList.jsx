import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { CardPokemon } from "./CardPokemon";
import { Loader } from "./Loader";
import { Pokeinfo } from "../pages/Pokeinfo";

export const PokemonList = () => {
  const { allPokemons, loading, pokeDex, setPokeDex, globalPokemons } =
    useContext(PokemonContext);

  const uniquePokemons = allPokemons.filter((pokemon, index, self) => {
    return self.findIndex((p) => p.id === pokemon.id) === index;
  });
  
  return (
    <>
      <div className="container">
        <div className="left-content">
          {loading ? (
            <Loader />
          ) : (
            <div className="card-list-pokemon container">
              {/* Renderizar los Pokémon */}
              {uniquePokemons.map((pokemon, index) => (
                <CardPokemon
                  pokemon={pokemon}
                  key={index}
                  infoPokemon={(poke) => setPokeDex(poke)}
                />
              ))}
            </div>
          )}
        </div>
        <div className="div-movido">
          <div className="right-content">
            <Pokeinfo data={pokeDex} />
          </div>
        </div>
      </div>
    </>
  );
};
