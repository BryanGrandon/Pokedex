import { usePokemonContext } from "../context/pokemon-context";

function Search() {
  let { handlerChangeSearch } = usePokemonContext();

  return (
    <section className="search">
      <input
        type="text"
        placeholder="Name or Number..."
        className="search__input"
        onChange={handlerChangeSearch}
      />
    </section>
  );
}

export default Search;
