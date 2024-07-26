import { getApiInfo } from "../services/api/getApiInformation";

const getEvolutions = async (json) => {
  const evolutions = [];
  let arr = json.chain;

  while (arr.length !== 0) {
    let minLevel = arr.evolution_details
      ? null
      : arr[0].evolution_details[0].min_level;
    let name = arr.species ? arr.species.name : arr[0].species.name;

    const json = await getApiInfo(`pokemon/${name}`);

    let data = {
      name: json.name,
      min_level: minLevel,
      image: json.sprites.other["official-artwork"].front_default,
      id: json.id,
      type: [],
    };
    json.types.forEach((e) => data.type.push(e.type.name));
    evolutions.push(data);
    arr = arr.evolves_to ? arr.evolves_to : arr[0].evolves_to;
  }
  return evolutions;
};

export { getEvolutions };
