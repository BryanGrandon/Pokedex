import React from "react";

function Type({ name, color }) {
  const styleType = {
    color: color,
    borderColor: color,
  };

  return (
    <p className="pokemon-type" style={styleType}>
      {name}
    </p>
  );
}

export default Type;
