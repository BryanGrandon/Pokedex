import { useParams } from "react-router-dom";
import { getApiInfo } from "../services/api/getApiInformation";
import { getStats } from "../functions/getStats";
import { getEvolutions } from "../functions/getEvolutions";
import { useEffect, useState } from "react";

function Pokemon() {
  const params = useParams();
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [evolution, setEvolution] = useState();

  const getPokemonData = async () => {
    let json = await getApiInfo(`pokemon/${params.id}`);

    let urlSpecies = json.species.url.split("/v2/").at(-1);
    let pokemonSpecies = await getApiInfo(urlSpecies);

    let urlEvolutions = pokemonSpecies.evolution_chain.url.split("/v2/").at(-1);
    let evolutions = await getApiInfo(urlEvolutions);

    const pokemonInfo = getStats(json);
    const pokemonEvolutions = await getEvolutions(evolutions);
    setPokemonInfo(pokemonInfo);
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  console.log(pokemonInfo);
  console.log(pokemonInfo.image);

  return (
    <article className="bg-shadow">
      <section>{pokemonInfo.number}</section>
      <section>{pokemonInfo.name}</section>
      <section>
        <img src={pokemonInfo.image} alt="" />
      </section>
    </article>
  );
}

export default Pokemon;
