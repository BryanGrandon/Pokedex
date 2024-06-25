import React from "react";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="https://pokeapi.co/" target="_blank" className="navbar__logo">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi.svg"
          alt="PokeApi"
          className="navbar__logo-img"
        />
      </a>
      <a
        href="https://github.com/BryanGrandon/pokedex"
        className="navbar__github"
        target="_blank"
      >
        <FaGithub />
        GitHub
      </a>
    </nav>
  );
}

export default Navbar;
