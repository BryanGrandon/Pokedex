import { usePokemonContext } from "../../context/pokemon-context";
import ButtonMain from "../button-main";
import NoResultsFound from "../no-results-found";
import PokemonCard from "../pokemon-card";

function PokemonList() {
  let { saved } = usePokemonContext();
  let { handlerClickLoadPokemon } = usePokemonContext();

  return (
    <>
      <section className="list">
        {saved.length != 0
          ? saved?.map((e) => (
              <PokemonCard
                key={e.id}
                name={e.name}
                number={e.id}
                types={e.types}
                img={e.sprites.other["official-artwork"].front_default}
              />
            ))
          : null}
      </section>
      {saved.length != 0 ? (
        <ButtonMain
          className="list-btn"
          children="Load more pokemon"
          onClick={handlerClickLoadPokemon}
        />
      ) : (
        <NoResultsFound />
      )}
    </>
  );
}

export default PokemonList;
