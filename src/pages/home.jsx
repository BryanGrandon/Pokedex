import React from "react";
import Header from "../components/header";

function Home() {
  return (
    <article className="bg-shadow">
      <Header />
      <main>
        <section>
          <h2>Filter</h2>
          <form>
            <input type="radio" name="status" value="fire" />
            <input type="radio" name="status" value="water" />
          </form>
        </section>
      </main>
      <footer></footer>
    </article>
  );
}

export default Home;
