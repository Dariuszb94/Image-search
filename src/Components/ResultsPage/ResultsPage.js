import React, { Component } from "react";
import Search from "../SearchPage/SearchPageComponents/Search";
import { Result } from "./ResultsComponents/Result";
import { connect } from "react-redux";
import { updateImages } from "../../actions/updateImages";
import { changeQuery } from "../../actions/changeQuery";

class ResultsPage extends Component {
  render() {
    return (
      <section className="results">
        <Search onResultPage={1} />
        <header className="results__header">{this.props.query}</header>
        <ul className="results__tags">
          {this.props.tags
            ? this.props.tags.slice(0, 10).map((value, index) => {
                return (
                  <li key={index} className="results__tag">
                    {value}
                  </li>
                );
              })
            : null}
        </ul>
        <ul className="results__list">
          {this.props.images
            ? this.props.images.slice(0, 10).map((value, index) => {
                return <Result key={index} imageData={value}/>;
              })
            : null}
        </ul>
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  images: state.images.images,
  query: state.query.query,
  tags: state.tags.tags,
});

export default connect(mapStateToProps, { updateImages, changeQuery })(
  ResultsPage
);
