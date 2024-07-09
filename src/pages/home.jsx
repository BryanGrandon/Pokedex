import Filter from "../components/filter";
import Header from "../components/header";
import PokemonList from "../components/pokemon-list";

function Home() {
  return (
    <article className="bg-shadow">
      <Header />
      <main className="main">
        <Filter />
        <PokemonList />
      </main>
      <footer></footer>
    </article>
  );
}

export default Home;
