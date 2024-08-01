import React from "react";
import { FaGithub } from "react-icons/fa";
import ButtonMain from "../button-main";

function Navbar() {
  const wlh = (text) => (window.location.href = text);
  return (
    <nav className="navbar">
      <a href="https://pokeapi.co/" target="_blank" className="navbar__logo">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi.svg"
          alt="PokeApi"
          className="navbar-img"
        />
      </a>

      <ButtonMain
        onClick={() => wlh(`https://github.com/BryanGrandon/pokedex`)}
      >
        <FaGithub /> GitHub
      </ButtonMain>
    </nav>
  );
}

export default Navbar;
