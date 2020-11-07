import React, { Component } from "react";
import  Search  from "./SearchPageComponents/Search";
export class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="search-bg">
          <h1 className="search__title">Image search</h1>
        <Search />
      </section>
    );
  }
}
