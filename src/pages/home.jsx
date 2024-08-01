import PokemonList from "../components/container/pokemon-list";
import Filter from "../components/container/filter";
import Header from "../components/container/header";
import Footer from "../components/container/footer";

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
      <Footer />
    </article>
  );
}

export default Home;
