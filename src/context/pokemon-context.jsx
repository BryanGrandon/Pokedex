import { createContext, useContext, useEffect, useState } from "react";

const PokemonContext = createContext();

// Hook
const usePokemonContext = () => {
  return useContext(PokemonContext);
};

// API

function PokemonContextProvider({ children }) {
  const [offset, setOffset] = useState(0);
  const [PokemonList, setPokemonList] = useState([]);
  const [saved, setSaved] = useState([]);

  const getAllPokemon = async (limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const res = await fetch(url);
    const data = await res.json();
    const promise = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promise);

    setPokemonList([...PokemonList, ...results]);
    setSaved([...PokemonList, ...results]);

    setOffset(offset + 5);
  };

  const handlerClick = () => {
    getAllPokemon();
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <PokemonContext.Provider value={{ saved, handlerClick }}>
      {children}
    </PokemonContext.Provider>
  );
}

export { usePokemonContext, PokemonContextProvider };
