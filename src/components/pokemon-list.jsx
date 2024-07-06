import { usePokemonContext } from "../context/pokemon-context";
import ButtonMain from "./button-main";
import PokemonCard from "./pokemon-card";

function PokemonList() {
  let { saved } = usePokemonContext();
  let { handlerClick } = usePokemonContext();

  return (
    <article className="pokemon-article">
      <section className="pokemon-list">
        {saved.length != 0
          ? saved?.map((e) => (
              <PokemonCard
                key={e.id}
                name={e.name}
                number={e.id}
                types={e.types}
                img={
                  e.sprites.other.dream_world.front_default
                    ? e.sprites.other.dream_world.front_default
                    : e.sprites.other.home.front_default
                    ? e.sprites.other.home.front_default
                    : e.sprites.other["official-artwork"].front_default
                }
              />
            ))
          : null}
      </section>
      {saved.length != 0 ? (
        <ButtonMain
          className="button-list"
          children="Load more pokemon"
          onClick={handlerClick}
        />
      ) : (
        <section className="pokemon-alert">
          <img
            className="pokemon-alert__svg"
            src="/src/assets/no-results-found.svg"
            alt="no-results-found.png"
          />

          <h2 className="pokemon-alert__title">No results found</h2>
          <p className="pokemon-alert__text">
            We couldn't find what you're looking for.
          </p>
        </section>
      )}
    </article>
  );
}

export default PokemonList;
