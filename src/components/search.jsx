import { usePokemonContext } from "../context/pokemon-context";

function Search() {
  let { handlerChangeSearch } = usePokemonContext();

  return (
    <section className="search">
      <input
        type="text"
        placeholder="Search pokemon"
        className="search__input"
        onChange={handlerChangeSearch}
      />
    </section>
  );
}

export default Search;
