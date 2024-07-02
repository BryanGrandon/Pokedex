import React from "react";
import { FaGithub } from "react-icons/fa";
import ButtonMain from "./button-main";

function Navbar() {
  const handlerClickGithub = () => {
    window.location.href = `https://github.com/BryanGrandon/pokedex`;
  };
  return (
    <nav className="navbar">
      <a href="https://pokeapi.co/" target="_blank" className="navbar__logo">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi.svg"
          alt="PokeApi"
          className="navbar__logo-img"
        />
      </a>

      <ButtonMain onClick={handlerClickGithub}>
        <FaGithub /> GitHub
      </ButtonMain>
    </nav>
  );
}

export default Navbar;
