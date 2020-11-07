import React, { Component } from "react";
import Unsplash, { toJson } from "unsplash-js";
import SearchIcon from '@material-ui/icons/Search';
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
        if(!this.state.tags.length){
          this.setState({
            noTags: true,
          });
        }
        else{
          this.setState({
            noTags: false,
          });
        }
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
        else{
          this.setState({
            tags: [],
          });
        }
      }
    );
  }
  render() {
    return (
      <section className="search">
        <input className="search__input" onChange={(e) => this.filterTags(e.target.value)} /><SearchIcon className="search__icon"/>
        <ul className="search__suggest">
        {this.state.tags.slice(0, 5).map((value, index) => {
        return <li key={index} className="search__suggest__option">{value}</li>
      })}

        </ul>
        {this.state.noTags ? <div className="search__none">No results</div> : null}
      </section>
    );
  }
}
