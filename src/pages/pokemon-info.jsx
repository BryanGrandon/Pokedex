import { useParams } from "react-router-dom";
import { getApiInfo } from "../functions/getApiInformation";

function PokemonInfo() {
  const params = useParams();
  const info = async () => {
    let data = await getApiInfo(`pokemon/${params.id}`);
    console.log(data);
  };
  info();

  return <div>{params.id}</div>;
}

export default PokemonInfo;
