import { useParams } from "react-router-dom";
import { getApiInfo } from "../functions/getApiInformation";

const getInfo = (json) => {
  const data = {
    name: json.name,
    number: json.id,
    image: {
      default: json.sprites.other["official-artwork"].front_default,
      shiny: json.sprites.other["official-artwork"].front_shiny,
    },
    state: {
      hp: json.stats[0].base_stat,
      attack: json.stats[1].base_stat,
      defense: json.stats[2].base_stat,
      special_attack: json.stats[3].base_stat,
      special_defense: json.stats[4].base_stat,
      speed: json.stats[5].base_stat,
    },
    type: [],
  };
  json.types.forEach((e) => data.type.push(e.type.name));
  return data;
};

const getEvolutions = (json) => {
  const data = json.chain;
  let array = [];
  let x = data.evolves_to;
  array.push({ name: x[0].species.name });

  console.log(x);
  // try doing fetch request in the while
  while (x.length !== 0) {
    let obj = {
      name: x[0].species.name,
      min_level: x[0].evolution_details[0].min_level,
    };
    array.push(obj);
    x = x[0].evolves_to;
  }
  console.log(array);
};

function PokemonInfo() {
  const params = useParams();

  const getPokemonData = async () => {
    let json = await getApiInfo(`pokemon/${params.id}`);
    let pokemonSpecies = await getApiInfo(
      json.species.url.split("/v2/").at(-1)
    );
    let evolutions = await getApiInfo(
      pokemonSpecies.evolution_chain.url.split("/v2/").at(-1)
    );
    const info = getInfo(json);
    const pokemonEvolutions = getEvolutions(evolutions);
  };
  getPokemonData();

  return <div>{params.id}</div>;
}

export default PokemonInfo;
