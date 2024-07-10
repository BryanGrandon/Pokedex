import React from "react";
import Search from "./search";
import { CiSearch } from "react-icons/ci";

const pokemonT = [
  { type: "bug", id: 0, color: "#26de81" },
  { type: "dragon", id: 2, color: "#ffeaa7" },
  { type: "electric", id: 3, color: "#fed330" },
  { type: "fairy", id: 4, color: "#FF0069" },
  { type: "fighting", id: 5, color: "#30336b" },
  { type: "fire", id: 6, color: "#f0932b" },
  { type: "flying", id: 7, color: "#81ecec" },
  { type: "grass", id: 8, color: "#00b894" },
  { type: "ground", id: 9, color: "#EFB549" },
  { type: "ghost", id: 10, color: "#a55eea" },
  { type: "ice", id: 11, color: "#74b9ff" },
  { type: "normal", id: 12, color: "#95afc0" },
  { type: "poison", id: 13, color: "#6c5ce7" },
  { type: "psychic", id: 14, color: "#a29bfe" },
  { type: "rock", id: 15, color: "#685a5a" },
  { type: "water", id: 16, color: "#0190FF" },
  { type: "steel", id: 17, color: "#728fa0" },
];

function Filter() {
  return (
    <section className="options">
      <section className="options__select">
        {pokemonT.map((e) => (
          <p
            key={e.id}
            style={{
              borderColor: e.color,
              ":hover": "#fff",
            }}
            className="options__select-type"
          >
            {e.type}
          </p>
        ))}
      </section>
      <label className="options__search">
        <CiSearch className="options__search-icon" />
        <Search />
      </label>
    </section>
  );
}

export default Filter;
