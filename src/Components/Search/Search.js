import React, { Component } from "react";
import Unsplash, { toJson } from "unsplash-js";
export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      tags: []
    };
  }
  collectTags() {
    const unsplash = new Unsplash({
      accessKey: "mwcZJW1qYyORxKFdUfn5Hn12UO1aDqVip2Yrj2S4TJk",
    });
    unsplash.search
      .photos(this.state.searchQuery, 1, 30)
      .then(toJson)
      .then((json) => {
        let array = new Set();
        for (let i = 0; i < json.results.length; i++) {
          if(  json.results[i].description?.includes(this.state.searchQuery))
          array.add(json.results[i].description);
  
          if( json.results[i].alt_description?.includes(this.state.searchQuery))
          array.add(json.results[i].alt_description);

          for (let j = 0; j < json.results[i].tags.length; j++) {
            if(json.results[i].tags[j].title.includes(this.state.searchQuery))
            array.add(json.results[i].tags[j].title);
          }
        }
        this.setState({
          tags: [...array],
        });
      });
  }
  filterTags(e) {
    this.setState(
      {
        searchQuery: e,
      },
      () => {
        if (this.state.searchQuery.length >= 3) {
          this.collectTags();
        }
      }
    );
  }
  render() {
    return (
      <section>
        <input onChange={(e) => this.filterTags(e.target.value)} />
        <ul>
        {this.state.tags.slice(0, 5).map((value, index) => {
        return <li key={index} className="search__suggest__option">{value}</li>
      })}

        </ul>
      </section>
    );
  }
}
