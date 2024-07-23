import { useParams } from "react-router-dom";

function PokemonInfo() {
  const params = useParams();
  return <div>{params.id}</div>;
}

export default PokemonInfo;
