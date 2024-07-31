import Navbar from "./navbar";

function Header() {
  return (
    <header className="header default-size">
      <Navbar />
      <section className="header-info">
        <h1 className="header-info-h1">Pokédex</h1>
        <img
          src="./assets/pokedex.png"
          alt="Pokedex"
          className="header-info-img"
        />
      </section>
    </header>
  );
}

export default Header;
