import PokemonList from "../components/container/pokemon-list";
import Filter from "../components/container/filter";
import Header from "../components/container/header";

function Home() {
  return (
    <article className="bg-shadow">
      <Header />
      <article className="home-main default-size">
        <Filter />
        <article className="home-list">
          <PokemonList />
        </article>
      </article>
      <footer></footer>
    </article>
  );
}

export default Home;
