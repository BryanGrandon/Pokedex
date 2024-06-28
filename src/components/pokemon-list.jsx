import { usePokemonContext } from "../context/pokemon-context";
import PokemonCard from "./pokemon-card";

function PokemonList() {
  let { saved } = usePokemonContext();
  let { handlerClick } = usePokemonContext();

  return (
    <article>
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
      <button onClick={handlerClick}>More</button>
    </article>
  );
}

export default PokemonList;
