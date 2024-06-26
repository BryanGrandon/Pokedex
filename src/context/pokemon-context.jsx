import { createContext, useContext, useEffect, useState } from "react";

const PokemonContext = createContext();

// Hook
const usePokemonContext = () => {
  return useContext(PokemonContext);
};

// API

function PokemonContextProvider({ children }) {
  const [offset, setOffset] = useState(50);

  const getAllPokemon = async (limit = 50) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const res = await fetch(url);
    const data = await res.json();
    const promise = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promise);
    console.log(results);
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <PokemonContext.Provider value={offset}>{children}</PokemonContext.Provider>
  );
}

export { usePokemonContext, PokemonContextProvider };
