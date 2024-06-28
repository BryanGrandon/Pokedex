import React from "react";
import Header from "../components/header";
import PokemonList from "../components/pokemon-list";

function Home() {
  return (
    <article className="bg-shadow">
      <Header />
      <main>
        <article>
          <section>
            <h2>Filter</h2>

            <form>
              <input type="radio" name="status" value="fire" />
              <input type="radio" name="status" value="water" />
            </form>
          </section>
          <PokemonList />
        </article>
      </main>
      <footer></footer>
    </article>
  );
}

export default Home;
