import { createContext, useContext, useEffect, useState } from "react";
import {
  getApiInfo,
  getIndividualInformation,
} from "../functions/getApiInformation";

const PokemonContext = createContext();

// Hook
const usePokemonContext = () => {
  return useContext(PokemonContext);
};

function PokemonContextProvider({ children }) {
  const [saved, setSaved] = useState([]);

  // Get all pokemon
  const [pokemonAll, setPokemonAll] = useState();

  const getAllPokemon = async () => {
    const data = await getApiInfo("pokemon?limit=100000&offset=0");
    const dataAll = [];

    data.results.map((e) => {
      const info = {
        id: e.url.split("/").at(-2),
        name: e.name,
        url: e.url,
      };
      dataAll.push(info);
    });
    setPokemonAll(dataAll);
  };

  // Get twenty pokemon
  const [offset, setOffset] = useState(0);
  const [twentyPokemon, setTwentyPokemon] = useState([]);

  const getTwentyPokemon = async (limit = 20) => {
    const data = await getApiInfo(`pokemon?limit=${limit}&offset=${offset}`);
    const results = await getIndividualInformation(data.results);
    setSaved([...twentyPokemon, ...results]);
    setTwentyPokemon([...twentyPokemon, ...results]);
    setOffset(offset + 20);
  };

  // Button Load more pokemon
  const handlerClick = () => {
    if (!inChange) getTwentyPokemon();
    else clickSearch();
  };

  //Search
  const [search, setSearch] = useState([]);
  const [limit, setLimit] = useState(0);
  const [inChange, setInChange] = useState(false);

  // Button for loading more pokemon when searching
  const clickSearch = async () => {
    const results = await getIndividualInformation(
      search.slice(limit, limit + 20)
    );
    setLimit(limit + 20);
    setSaved([...saved, ...results]);
  };

  const handlerChangeSearch = async (e) => {
    let value = e.target.value;

    if (value !== "") {
      setInChange(true);

      let filtering = !isNaN(Number(value))
        ? pokemonAll.filter((e) => e.id.toString().includes(Number(value)))
        : pokemonAll.filter((e) => e.name.includes(value));

      const results = await getIndividualInformation(filtering.slice(0, 20));
      setSearch(filtering);
      setSaved(results);
      setLimit(20);
    } else {
      setInChange(false);
      setSaved(twentyPokemon);
    }
  };

  // Filter
  const handlerClickFilter = async (e) => {
    // Clear input search
    const $inputSearch = document.querySelector(".search__input");
    $inputSearch.value = "";

    const type = e.target.innerText;
    if (type !== "All") {
      let data = await getApiInfo(`/type/${type}`);
      let arrayType = [];
      data.pokemon.map((e) => {
        let info = {
          name: e.pokemon.name,
          url: e.pokemon.url,
        };
        arrayType.push(info);
      });
      const results = await getIndividualInformation(arrayType.slice(0, 20));
      setLimit(20);
      setSearch(arrayType);
      setInChange(true);
      setSaved(results);
    } else {
      setInChange(false);
      setSaved(twentyPokemon);
    }
  };

  useEffect(() => {
    getAllPokemon();
    getTwentyPokemon();
  }, []);

  return (
    <PokemonContext.Provider
      value={{ saved, handlerClick, handlerChangeSearch, handlerClickFilter }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export { usePokemonContext, PokemonContextProvider };
