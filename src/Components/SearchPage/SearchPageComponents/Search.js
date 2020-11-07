import React, { Component } from "react";
import Unsplash, { toJson } from "unsplash-js";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";
import { updateImages } from "../../../actions/updateImages";
import { changeQuery } from "../../../actions/changeQuery";
import { updateTags } from "../../../actions/updateTags";

import { withRouter } from "react-router-dom";
import { compose } from "redux";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      tags: [],
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.changeQuery = this.changeQuery.bind(this);
  }
  changeQuery() {
    if (this.state.searchQuery.length > 2) {
      this.props.changeQuery(this.state.searchQuery);
      this.props.history.push("/ResultsPage");
    }
  }
  collectTags() {
    const unsplash = new Unsplash({
      accessKey: "mwcZJW1qYyORxKFdUfn5Hn12UO1aDqVip2Yrj2S4TJk",
    });
    unsplash.search
      .photos(this.state.searchQuery, 1, 30)
      .then(toJson)
      .then((json) => {
        this.props.updateImages(json.results);
        let array = new Set();
        let arrayResults = new Set();
        for (let i = 0; i < json.results.length; i++) {
          if (json.results[i].description?.includes(this.state.searchQuery))
            array.add(json.results[i].description);

          if (
            json.results[i].alt_description?.includes(this.state.searchQuery)
          ) {
          }
          array.add(json.results[i].alt_description);

          for (let j = 0; j < json.results[i].tags.length; j++) {
          if (
               json.results[i].tags[j].title.length<20
            ) {
              arrayResults.add(json.results[i].tags[j].title);
            }
            if (
              json.results[i].tags[j].title.includes(this.state.searchQuery) && json.results[i].tags[j].title.length<20
            ) {
              array.add(json.results[i].tags[j].title);
            }
          }
        }
        this.setState({
          tags: [...array],
        });
        this.props.updateTags([...arrayResults]);
        if (!this.state.tags.length) {
          this.setState({
            noTags: true,
          });
        } else {
          this.setState({
            noTags: false,
          });
        }
      });
  }
  handleEnter(e) {
    if (e.keyCode == 13 && this.state.searchQuery.length > 2) {
      this.props.changeQuery(this.state.searchQuery);
      this.props.history.push("/ResultsPage");
    }
  }
  filterTags(e) {
    this.setState(
      {
        searchQuery: e,
      },
      () => {
        if (this.state.searchQuery.length >= 3) {
          this.collectTags();
        } else {
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
        <input
          className="search__input"
          placeholder="type keyword (min 3 chars)"
          onChange={(e) => this.filterTags(e.target.value)}
          onKeyDown={this.handleEnter}
        />
        <SearchIcon
          className="search__icon"
          onClick={() => {
            this.changeQuery();
          }}
        />
        <ul className="search__suggest">
          {this.state.tags.slice(0, 5).map((value, index) => {
            return (
              <li
                key={index}
                className="search__suggest__option"
                onClick={() => {
                  this.changeQuery();
                }}
                onClick={() => {
                  this.changeQuery();
                }}
              >
                {value}
              </li>
            );
          })}
        </ul>
        {this.state.noTags ? (
          <div className="search__none">No results</div>
        ) : null}
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  images: state.images.images,
  query: state.query.query,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { updateImages, changeQuery,updateTags })
)(Search);
