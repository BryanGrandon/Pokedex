import React from "react";

const getColor = (type) => {
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
    rock: "#2d3436",
    water: "#0190FF",
  };
  let bg;
  Object.entries(typeColor).forEach((color) => {
    if (color[0] === type) bg = color[1];
  });
  return bg;
};

function PokemonCard({ name, number, types, img }) {
  let pokemonNumber = number.toString().padStart(4, "0");
  let pokemonTypes = [];

  types.map((e) => {
    const info = {
      id: Math.floor(Math.random() * 2000),
      name: e.type.name,
      color: getColor(e.type.name),
    };
    pokemonTypes.push(info);
  });

  const bgColor = pokemonTypes[0].color + "9f";

  return (
    <article className="pokemon" style={{ background: bgColor }}>
      <section>
        <p className="pokemon__number">N°{pokemonNumber}</p>
      </section>
      <img
        src={img}
        alt={`sprites-pokemon-${pokemonNumber}`}
        className="pokemon__sprites"
      />
      <h3 className="pokemon__name">{name}</h3>
      <section className="pokemon__types">
        {pokemonTypes.map((type) => (
          <p
            key={type.id}
            className={`pokemon__types-type type-${type.name}`}
            style={{ background: type.color }}
          >
            {type.name}
          </p>
        ))}
      </section>
    </article>
  );
}

export default PokemonCard;
