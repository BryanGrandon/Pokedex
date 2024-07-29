import React from "react";
import { getPokemonColorType } from "../functions/getPokemonColorType";
import { useNavigate } from "react-router-dom";

function PokemonCard({ name, number, types, img }) {
  const navigate = useNavigate();

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

  const styleCard = {
    borderColor: pokemonTypes[0].color,
    boxShadow: `2px 2px .6rem ${pokemonTypes[0].color + 70}`,
  };

  return (
    <article
      className="card"
      style={styleCard}
      onClick={() => navigate(`/pokemon/${number}`)}
    >
      <section>
        <p className="card__number">N°{pokemonNumber}</p>
      </section>
      <img
        src={img}
        alt={`sprites-pokemon-${pokemonNumber}`}
        className="card__sprites"
      />
      <h3 className="card__name">{name}</h3>
      <section className="card__types">
        {pokemonTypes.map((type) => (
          <p
            key={type.id}
            className={`card__types-type`}
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
