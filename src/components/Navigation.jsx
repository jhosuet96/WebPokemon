import React, { useContext, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import logo from "../assets/Pokédex_logo.png";

export const Navigation = () => {
  const { onInputChange, valueSearch, onResetForm, globalPokemons } =
    useContext(PokemonContext);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/search", {
      state: valueSearch,
    });

    onResetForm();
  };

  const onInputChangeAutoComplete = (e) => {
    const { value } = e.target;
    onInputChange(e);

    // Filtrar los nombres de los pokémon en base al valor ingresado
    const newSuggestions = globalPokemons
      .filter((pokemon) => pokemon.name.toLowerCase().startsWith(value.toLowerCase()))
      .map((pokemon) => pokemon.name)
      .slice(0, 5); // Limitar a 5 elementos

    setSuggestions(newSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    onInputChange({ target: { name: "valueSearch", value: suggestion } });
    setSuggestions([]);
  };

  return (
    <>
      <header className="containerAll">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo Pokedex" />
        </Link>

        <form onSubmit={onSearchSubmit}>
          <div className="form-group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon-search"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="search"
              name="valueSearch"
              id=""
              value={valueSearch}
              onChange={onInputChangeAutoComplete}
              placeholder="Buscar nombre de pokemon"
              required
            />

            {suggestions.length > 0 && (
              <div className="dropdown">
                <ul className="dropdown-menu">
                  {suggestions.map((suggestion, index) => (
                    <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <button className="btn-search">Buscar</button>
        </form>
      </header>

      <Outlet />
    </>
  );
};
