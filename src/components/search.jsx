import { usePokemonContext } from "../context/pokemon-context";
import { CiSearch } from "react-icons/ci";

function Search() {
  let { handlerChangeSearch } = usePokemonContext();

  return (
    <label className="search">
      <CiSearch className="search-icon" />
      <input
        type="text"
        className="search-input"
        placeholder="Search pokemon"
        onChange={handlerChangeSearch}
      />
    </label>
  );
}

export default Search;
