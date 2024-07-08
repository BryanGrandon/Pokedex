import { CiSearch } from "react-icons/ci";
import Header from "../components/header";
import PokemonList from "../components/pokemon-list";
import Search from "../components/search";

function Home() {
  return (
    <article className="bg-shadow">
      <Header />
      <main className="main">
        <section className="options">
          <h2>Filter</h2>
          <label className="options__search">
            <CiSearch className="options__search-icon" />
            <Search />
          </label>
        </section>
        <PokemonList />
      </main>
      <footer></footer>
    </article>
  );
}

export default Home;
