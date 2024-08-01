import React from "react";
import { getTypesAndColor } from "../functions/getPokemonColorType";
import { useNavigate } from "react-router-dom";
import Type from "./type";

function PokemonCard({ name, number, types, img }) {
  const navigate = useNavigate();

  let pokemonNumber = number.toString().padStart(4, "0");
  let pokemonTypes = getTypesAndColor(types);

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
          <Type key={type.id} name={type.name} color={type.color} />
        ))}
      </section>
    </article>
  );
}

export default PokemonCard;
