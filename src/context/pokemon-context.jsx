import { createContext, useContext, useEffect, useState } from "react";

const PokemonContext = createContext();

// Hook
const usePokemonContext = () => {
  return useContext(PokemonContext);
};

// API

function PokemonContextProvider({ children }) {
  const [offset, setOffset] = useState(0);
  const [saved, setSaved] = useState([]);
  const [pokemonAll, setPokemonAll] = useState();

  const getAllPokemon = async () => {
    const urlAllPokemon = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
    const result = await fetch(urlAllPokemon);
    const dataAll = await result.json();
    const dataPokemon = dataAll.results;
    const pokemonNames = dataPokemon.map((e) => e.name);
    const data = [];

    dataPokemon.map((e) => {
      const info = {
        id: pokemonNames.indexOf(e.name) + 1,
        name: e.name,
        url: e.url,
      };
      data.push(info);
    });
    setPokemonAll(data);
  };

  const getTwentyPokemon = async (limit = 20) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const result = await fetch(url);
    const data = await result.json();
    const promise = data.results.map(async (pokemon) => {
      const result = await fetch(pokemon.url);
      const data = await result.json();
      return data;
    });
    const results = await Promise.all(promise);

    setSaved([...saved, ...results]);
    setOffset(offset + 20);
  };

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
