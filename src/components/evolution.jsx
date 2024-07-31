import React from "react";
import { getTypesAndColor } from "../functions/getPokemonColorType";
import Type from "./type";
import { useNavigate } from "react-router-dom";

function Evolution({ name, image, type, id, level }) {
  const types = getTypesAndColor(type);
  const navigate = useNavigate();

  return (
    <section
      className="evolution"
      onClick={() => {
        navigate(`/pokemon/${id}`);
        location.reload();
      }}
    >
      <section className="evolution-header">
        <p></p>
        <p className="evolution-id">N°{id}</p>
      </section>
      <img className="evolution-image" src={image} alt={`img-${name}`} />
      <p className="evolution-name">{name}</p>
      <section className="evolution-type">
        {types.map((type) => (
          <Type key={type.id} name={type.name} color={type.color} />
        ))}
      </section>
      {console.log(level)}
      {level ? (
        <p className="evolution-level">Evolution to level {level}</p>
      ) : null}
    </section>
  );
}

export default Evolution;
