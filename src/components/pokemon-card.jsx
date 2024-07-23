import React from "react";
import { getPokemonColorType } from "../functions/getPokemonColorType";
import { useNavigate } from "react-router-dom";

function PokemonCard({ name, number, types, img }) {
  const navigate = useNavigate();
  const handlerClick = () => {
    navigate(`/pokemon/${number}`);
  };

  let pokemonNumber = number.toString().padStart(4, "0");
  let pokemonTypes = [];

  types.map((e) => {
    const info = {
      id: Math.floor(Math.random() * 2000),
      name: e.type.name,
      color: getPokemonColorType(e.type.name),
    };
    pokemonTypes.push(info);
  });

  const colorPokemonCard = {
    borderColor: pokemonTypes[0].color,
    boxShadow: `2px 2px .6rem ${pokemonTypes[0].color + 70}`,
  };

  return (
    <article
      className="pokemon"
      style={colorPokemonCard}
      onClick={handlerClick}
    >
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
            style={{ color: type.color, borderColor: type.color }}
          >
            {type.name}
          </p>
        ))}
      </section>
    </article>
  );
}

export default PokemonCard;
