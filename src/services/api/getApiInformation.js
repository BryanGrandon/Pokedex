const getApiInfo = async (url) => {
  const getUrl = "https://pokeapi.co/api/v2/" + url;
  const result = await fetch(getUrl);
  const data = await result.json();
  return data;
};

// asynchronously retrieves and returns individual information for each Pokemon in the input array.
const getIndividualInformation = async (info) => {
  const promise = info.map(async (pokemon) => {
    const result = await fetch(pokemon.url);
    const data = await result.json();
    return data;
  });
  const results = await Promise.all(promise);
  return results;
};

export { getIndividualInformation, getApiInfo };
