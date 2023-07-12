import React, { useContext, useState } from "react";
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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Obtener las letras iniciales de los nombres de los Pokémon
  const initials = Array.from(
    new Set(globalPokemons.map((pokemon) => pokemon.name[0].toUpperCase()))
  ).sort();

  // Calcular el total de páginas
  const totalPages = Math.ceil(initials.length / itemsPerPage);

  // Obtener los datos para la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = initials.slice(startIndex, endIndex);
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
          

          <div className="derecha">
            <div className="table">
              <div className="row">
                <div className="cell th">Letra</div>
                <div className="cell th">Cantidad</div>
              </div>
              {currentPageData.map((initial, index) => {
                const count = globalPokemons.filter(
                  (pokemon) => pokemon.name[0].toUpperCase() === initial
                ).length;
                return (
                  <div className="row" key={index}>
                    <div className="cell">{initial}</div>
                    <div className="cell">{count}</div>
                  </div>
                );
              })}
            </div>

            <div className="pagination">
              <button
                className="btnTable"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previus
              </button>
              <span style={{ fontFamily: "inherit", fontWeight: "700" }}>
                {currentPage}
              </span>
              <button
                className="btnTable"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
