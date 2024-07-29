const getStats = (json) => {
  const data = {
    name: json.name,
    id: json.id,
    image: json.sprites.other["official-artwork"].front_default,
    shiny: json.sprites.other["official-artwork"].front_shiny,
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

export { getStats };
