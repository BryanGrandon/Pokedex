const getPokemon = async (limit, offset) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

export { getPokemon };
