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

export { getGeneralInfo, getSpecificInfo };
