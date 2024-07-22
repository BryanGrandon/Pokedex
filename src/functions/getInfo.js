const getGeneralInfo = async (limit, offset) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

const getSpecificInfo = async (info) => {
  const promise = info.map(async (pokemon) => {
    const result = await fetch(pokemon.url);
    const data = await result.json();
    return data;
  });
  const results = await Promise.all(promise);
  return results;
};

const getSpecificType = async (pokemonType) => {
  const url = "https://pokeapi.co/api/v2/type/" + pokemonType;
  const result = await fetch(url);
  const data = await result.json();
  let arrType = [];
  data.pokemon.map((e) => {
    let info = {
      name: e.pokemon.name,
      url: e.pokemon.url,
    };
    arrType.push(info);
  });
  return arrType;
};

export { getGeneralInfo, getSpecificInfo, getSpecificType };
