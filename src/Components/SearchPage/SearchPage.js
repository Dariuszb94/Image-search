import React from "react";
import Search from "./SearchPageComponents/Search";

export function SearchPage() {
  return (
    <section className="search-bg">
    <h1 className="search__title">Image search</h1>
    <Search />
  </section>
  );
}
