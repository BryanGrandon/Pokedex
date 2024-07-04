import React from "react";
import Header from "../components/header";
import PokemonList from "../components/pokemon-list";
import Search from "../components/search";

function Home() {
  return (
    <article className="bg-shadow">
      <Header />
      <main className="main">
        <section>
          <h2>Filter</h2>
          <Search />
        </section>
        <PokemonList />
      </main>
      <footer></footer>
    </article>
  );
}

export default Home;
