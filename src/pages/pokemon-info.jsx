import { useParams } from "react-router-dom";
import { getApiInfo } from "../services/api/getApiInformation";
import { getStats } from "../functions/getStats";
import { getEvolutions } from "../functions/getEvolutions";

function PokemonInfo() {
  const params = useParams();

  const getPokemonData = async () => {
    let json = await getApiInfo(`pokemon/${params.id}`);

    let urlSpecies = json.species.url.split("/v2/").at(-1);
    let pokemonSpecies = await getApiInfo(urlSpecies);

    let urlEvolutions = pokemonSpecies.evolution_chain.url.split("/v2/").at(-1);
    let evolutions = await getApiInfo(urlEvolutions);

    const info = getStats(json);
    const pokemonEvolutions = await getEvolutions(evolutions);
    console.log(info);
    console.log(pokemonEvolutions);
  };
  getPokemonData();

  return <div>{params.id}</div>;
}

export default PokemonInfo;
