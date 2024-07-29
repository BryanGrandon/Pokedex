import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApiInfo } from "../services/api/getApiInformation";
// Functions
import { getStats } from "../functions/getStats";
import { getEvolutions } from "../functions/getEvolutions";
import { FaArrowLeft } from "react-icons/fa";

function Pokemon() {
  const params = useParams();
  const [info, setInfo] = useState([]);
  const [evolution, setEvolution] = useState([]);
  const [stats, setStats] = useState([]);

  const getPokemonData = async () => {
    let json = await getApiInfo(`pokemon/${params.id}`);
    let urlSpecies = json.species.url.split("/v2/").at(-1);
    let pokemonSpecies = await getApiInfo(urlSpecies);
    let urlEvolutions = pokemonSpecies.evolution_chain.url.split("/v2/").at(-1);
    let evolutions = await getApiInfo(urlEvolutions);
    const pokemonInfo = getStats(json);
    const pokemonEvolutions = await getEvolutions(evolutions);
    const pokemonStats = Object.entries(pokemonInfo.state);

    setEvolution(pokemonEvolutions);
    setInfo(pokemonInfo);
    setStats(pokemonStats);
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <article className="bg-shadow">
      <article className="pokemon  default-size">
        <header className="pokemon-header">
          <section
            className="pokemon-header__btn"
            onClick={() => history.back()}
          >
            <FaArrowLeft />
          </section>
          <p className="pokemon-header__number">Nº{info.id}</p>
        </header>

        <article className="pokemon-main">
          <h2 className="pokemon-main__h2">{info.name}</h2>
          <section className="stats">
            <img
              className="stats-img"
              src={info.image}
              alt={`img-pokemon-${info.name}`}
            />
            <section className="stats-info">
              {stats.map((e) => (
                <section key={Math.random() * 10} className="stats-info-single">
                  <p className="stats-info-single-name">{e[0]}:</p>
                  <p className="stats-info-single-number">{e[1]}</p>
                </section>
              ))}
            </section>
          </section>
        </article>

        <article>
          <h3>Evolutions</h3>
        </article>
      </article>
    </article>
  );
}

export default Pokemon;
