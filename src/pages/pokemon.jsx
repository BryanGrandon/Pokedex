import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApiInfo } from "../services/api/getApiInformation";
// Functions
import { getStats } from "../functions/getStats";
import { getEvolutions } from "../functions/getEvolutions";
import { FaArrowLeft } from "react-icons/fa";

function Pokemon() {
  const params = useParams();
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [evolution, setEvolution] = useState();

  const getPokemonData = async () => {
    let json = await getApiInfo(`pokemon/${params.id}`);
    let urlSpecies = json.species.url.split("/v2/").at(-1);
    let pokemonSpecies = await getApiInfo(urlSpecies);
    let urlEvolutions = pokemonSpecies.evolution_chain.url.split("/v2/").at(-1);
    let evolutions = await getApiInfo(urlEvolutions);
    const pokemonInfo = getStats(json);
    const pokemonEvolutions = await getEvolutions(evolutions);
    setPokemonInfo(pokemonInfo);
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  console.log(pokemonInfo);
  return (
    <article className="bg-shadow">
      <article className="pokemon-info">
        <header className="pokemon-header">
          <section className="info-return" onClick={() => history.back()}>
            <FaArrowLeft />
          </section>
          <p className="info-number">Nº{pokemonInfo.id}</p>
        </header>
        <section className="pokemon-info__stats">
          <h2 className="info-name">{pokemonInfo.name}</h2>
          <section className="pokemon-info__stats-info">
            <img
              className="info-img"
              src={pokemonInfo.image}
              alt={`img-pokemon-${pokemonInfo.name}`}
            />
            <section>
              <h2>Stats</h2>
            </section>
          </section>
        </section>
      </article>
    </article>
  );
}

export default Pokemon;
