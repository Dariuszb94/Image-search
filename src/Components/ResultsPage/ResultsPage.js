import React, { Component } from "react";
import Search from "../SearchPage/SearchPageComponents/Search"
export class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="results">
        <Search/>
      </section>
    );
  }
}
