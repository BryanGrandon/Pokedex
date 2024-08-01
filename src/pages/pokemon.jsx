import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getApiInfo } from "../services/api/getApiInformation";
// Functions
import { getStats } from "../functions/getStats";
import { getTypesAndColor } from "../functions/getPokemonColorType";
import { getEvolutions } from "../functions/getEvolutions";
import { FaArrowLeft } from "react-icons/fa";
import Type from "../components/type";
import Evolution from "../components/evolution";

function Pokemon() {
  const params = useParams();
  const [info, setInfo] = useState([]);
  const [evolution, setEvolution] = useState([]);
  const [stats, setStats] = useState([]);

  const getPokemonData = async () => {
    let json = await getApiInfo(`pokemon/${params.id}`);
    const pokemonInfo = getStats(json);
    setInfo(pokemonInfo);

    let urlSpecies = json.species.url.split("/v2/").at(-1);
    let pokemonSpecies = await getApiInfo(urlSpecies);
    let urlEvolutions = pokemonSpecies.evolution_chain.url.split("/v2/").at(-1);
    let evolutions = await getApiInfo(urlEvolutions);
    const pokemonEvolutions = await getEvolutions(evolutions);
    setEvolution(pokemonEvolutions);

    const pokemonStats = Object.entries(pokemonInfo.state);
    setStats(pokemonStats);
  };

  const pokemonType = getTypesAndColor(info.type);

  const navigate = useNavigate();

  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <article className="bg-shadow">
      <article className="pokemon  default-size">
        <header className="pokemon-header">
          <section
            className="pokemon-header__btn"
            onClick={() => navigate("/Pokedex/")}
          >
            <FaArrowLeft />
          </section>
          <p className="pokemon-header__number">Nº{info.id}</p>
        </header>

        <article className="pokemon-main">
          <h2 className="pokemon-main__h2">{info.name}</h2>
          <section className="stats">
            <section>
              <img
                className="stats-img"
                src={info.image}
                alt={`img-pokemon-${info.name}`}
              />
              <section className="stats-type">
                {pokemonType.map((type) => (
                  <Type key={type.id} name={type.name} color={type.color} />
                ))}
              </section>
            </section>
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

        <article className="evolutions">
          <h3 className="evolutions-title">Evolutions</h3>
          <section className="evolutions-pokemon">
            {evolution.map((e) => (
              <Evolution
                key={Math.random() * 10}
                name={e.name}
                image={e.image}
                type={e.type}
                level={e.min_level}
                id={e.id}
              />
            ))}
          </section>
        </article>
      </article>
    </article>
  );
}

export default Pokemon;
