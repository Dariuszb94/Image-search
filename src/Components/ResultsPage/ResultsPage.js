import React, { Component } from "react";
import Search from "../SearchPage/SearchPageComponents/Search";
import { connect } from "react-redux";
import { updateImages } from "../../actions/updateImages";
import { changeQuery } from "../../actions/changeQuery";
class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidUpdate() {
console.log(this.props.tags);
}
  render() {
    return (
      <section className="results">
        <Search />
        <header className="results__header">{this.props.query}</header>
        <ul className="results__tags">
{this.props.tags ? this.props.tags.map((value, index) => {  return (
          <li
            key={index}
className="results__tag"
          >
            {value}
          </li>
        );}) : null}
 
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
