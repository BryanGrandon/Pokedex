import { usePokemonContext } from "../context/pokemon-context";
import ButtonMain from "./button-main";
import PokemonCard from "./pokemon-card";

function PokemonList() {
  let { saved } = usePokemonContext();
  let { handlerClick } = usePokemonContext();

  return (
    <article className="pokemon-article">
      <section className="pokemon-list">
        {saved?.map((e) => (
          <PokemonCard
            key={e.id}
            name={e.name}
            number={e.id}
            types={e.types}
            img={e.sprites.other.dream_world.front_default}
          />
        ))}
      </section>
      <ButtonMain
        className="button-list"
        children="Load more pokemon"
        onClick={handlerClick}
      />
    </article>
  );
}

export default PokemonList;
