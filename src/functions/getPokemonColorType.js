const getPokemonColorType = (type) => {
  const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#685a5a",
    water: "#0190FF",
    steel: "#728fa0",
  };
  let bg;
  Object.entries(typeColor).forEach((color) => {
    if (color[0] === type) bg = color[1];
  });
  return bg;
};

const getTypesAndColor = (types) => {
  let pokemonTypes = [];
  types?.map((e) => {
    const info = {
      id: Math.floor(Math.random() * 2000),
      name: e.type.name,
      color: getPokemonColorType(e.type.name),
    };
    pokemonTypes.push(info);
  });
  return pokemonTypes;
};

export { getTypesAndColor };
