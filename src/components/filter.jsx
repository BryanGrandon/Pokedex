import React from "react";
import Search from "./search";
import Select from "react-select";
import { CiSearch } from "react-icons/ci";

const options = [
  { value: "", label: "All types" },
  { value: "bug", label: "Bug" },
  { value: "dragon", label: "Dragon" },
  { value: "electric", label: "Electric" },
  { value: "fairy", label: "Fairy" },
  { value: "fighting", label: "Fighting" },
  { value: "fire", label: "Fire" },
  { value: "flying", label: "Flying" },
  { value: "grass", label: "Grass" },
  { value: "ground", label: "Ground" },
  { value: "ghost", label: "Ghost" },
  { value: "ice", label: "Ice" },
  { value: "normal", label: "Normal" },
  { value: "poison", label: "Poison" },
  { value: "psychic", label: "Psychic" },
  { value: "rock", label: "Rock" },
  { value: "water", label: "Water" },
  { value: "steel", label: "Steel" },
];

const stylesSelect = {
  control: (styles, state) => {
    return {
      ...styles,
      backgroundColor: state.isFocused ? "#fe1a55c4" : "#fe1a55",
      borderColor: state.isFocused ? "#00f" : "#f00",
    };
  },
  option: (styles, state) => {
    console.log(styles);
    return {
      ...styles,
      color: state.isSelected ? "#1b1919" : "#fe1a55",
      backgroundColor: state.isSelected ? "#fe1a55" : "transparent",
      borderColor: state.isFocused ? "#f00" : "#00f",

      ":hover": {
        ...styles[":hover"],
        backgroundColor: "#fe1a5550",
        color: "#1f1235",
      },
    };
  },
  placeholder: (styles) => {
    return {
      ...styles,
      color: "#1f1235",
    };
  },
};

function Filter() {
  return (
    <section className="options">
      <Select
        className="options__select"
        placeholder="Select pokemon Types..."
        options={options}
        styles={stylesSelect}
        onChange={(e) => {
          console.log(e);
        }}
      />
      <label className="options__search">
        <CiSearch className="options__search-icon" />
        <Search />
      </label>
    </section>
  );
}

export default Filter;
