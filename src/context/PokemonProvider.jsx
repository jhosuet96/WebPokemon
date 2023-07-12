import { useEffect, useState } from "react";
import { useForm } from "../hook/useForm";
import { PokemonContext } from "./PokemonContext";


export const PokemonProvider = ({ children }) => {
  const [allPokemons, setPokemons] = useState([]);
  const [AllPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex,setPokeDex]=useState();
	const [globalPokemons, setGlobalPokemons] = useState([]);

  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: "",
  });

  const getPokemons = async (res) => {
    if (res != null) {
      const promises = res.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
      });
      const results = await Promise.all(promises);
          setPokemons((state) => {
            state = [...state, results];
            state.sort((a, b) => (a.id > b.id ? 1 : -1));
            return state;
          });
      setLoading(false);
    }
  };
  
  const getAllPokemons = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setNextUrl(data.next);
    setPrevUrl(data.previous);

    getPokemons(data.results);
    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);
    setAllPokemons(results);
    setLoading(false);
  };

  const getGlobalPokemons = async () => {
		const res = await fetch(
			`${url}?limit=100000&offset=0`
		);
		const data = await res.json();

		const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
		const results = await Promise.all(promises);

		setGlobalPokemons(results);
		setLoading(false);
	};

  useEffect(() => {
    getAllPokemons();
  }, [url]);

  useEffect(() => {
		getGlobalPokemons();
	}, []);

  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        AllPokemons,
        loading,
        globalPokemons,
        setLoading,
        setUrl,
        nextUrl,
        prevUrl,
        setPokemons,
        setPokeDex,
        pokeDex
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
