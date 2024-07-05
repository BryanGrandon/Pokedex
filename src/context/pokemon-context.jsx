import { createContext, useContext, useEffect, useState } from "react";
import { getPokemon } from "../functions/getPokemon";

const PokemonContext = createContext();

// Hook
const usePokemonContext = () => {
  return useContext(PokemonContext);
};

// API

function PokemonContextProvider({ children }) {
  const [offset, setOffset] = useState(0);
  const [twentyPokemon, setTwentyPokemon] = useState([]);
  const [saved, setSaved] = useState([]);
  const [pokemonAll, setPokemonAll] = useState();

  const getAllPokemon = async () => {
    const data = await getPokemon(100000, 0);
    const pokemonNames = data.results.map((e) => e.name);
    const dataAll = [];

    data.results.map((e) => {
      const info = {
        id: pokemonNames.indexOf(e.name) + 1,
        name: e.name,
        url: e.url,
      };
      dataAll.push(info);
    });
    setPokemonAll(dataAll);
  };

  const getTwentyPokemon = async (limit = 20) => {
    const data = await getPokemon(limit, offset);
    const promise = data.results.map(async (pokemon) => {
      const result = await fetch(pokemon.url);
      const data = await result.json();
      return data;
    });
    const results = await Promise.all(promise);

    setSaved([...twentyPokemon, ...results]);
    setTwentyPokemon([...twentyPokemon, ...results]);
    setOffset(offset + 20);
  };

  // Button Load more pokemon
  const handlerClick = () => {
    getTwentyPokemon();
  };

  useEffect(() => {
    getAllPokemon();
    getTwentyPokemon();
  }, []);

  return (
    <PokemonContext.Provider value={{ saved, handlerClick }}>
      {children}
    </PokemonContext.Provider>
  );
}

export { usePokemonContext, PokemonContextProvider };
