import Navbar from "./navbar";

function Header() {
  return (
    <header className="header">
      <Navbar />
      <section className="header__info">
        <h1 className="header__info-h1">Pokédex</h1>
        <img
          src="/src/assets/pokedex.png"
          alt="Pokedex"
          className="header__info-img"
        />
      </section>
    </header>
  );
}

export default Header;
