import React from "react";
import Search from "./search";
import { CiSearch } from "react-icons/ci";

function Filter() {
  return (
    <section className="options">
      <label className="options__search">
        <CiSearch className="options__search-icon" />
        <Search />
      </label>
    </section>
  );
}

export default Filter;
