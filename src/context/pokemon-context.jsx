import { createContext, useContext, useEffect, useState } from "react";
import {
  getGeneralInfo,
  getSpecificInfo,
  getSpecificType,
} from "../functions/getInfo";

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
    const data = await getGeneralInfo(100000, 0);
    const dataAll = [];

    data.results.map((e) => {
      let id = e.url.split("/");
      const info = {
        id: id.at(-2),
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
    const data = await getGeneralInfo(limit, offset);
    const results = await getSpecificInfo(data.results);
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
    const results = await getSpecificInfo(search.slice(limit, limit + 20));
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

      const results = await getSpecificInfo(filtering.slice(0, 20));
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
    if (type == "All") setSaved(twentyPokemon);

    let info = await getSpecificType(type);
    // Show 20 results
    const results = await getSpecificInfo(info.slice(0, 20));
    setLimit(20);
    setSearch(info); // save info to display 20 results
    setInChange(true);
    setSaved(results);
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
