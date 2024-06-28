import React from "react";
import Header from "../components/header";
import PokemonList from "../components/pokemon-list";

function Home() {
  return (
    <article className="bg-shadow">
      <Header />
      <main className="main">
        <section>
          <h2>Filter</h2>
        </section>
        <PokemonList />
      </main>
      <footer></footer>
    </article>
  );
}

export default Home;
