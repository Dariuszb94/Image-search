import React, { Component } from "react";
import RoomIcon from "@material-ui/icons/Room";
import CloseIcon from "@material-ui/icons/Close";
import $ from "jquery";
export class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
showModal(){
 
  if(!this.state.showModal){
    $(".result").css("pointer-events","none");

    this.setState({
      showModal: true,
    },()=>{
      $(".overlay__close").css("pointer-events","auto");
    });
  }

}
hideModal(){
  $(".result").css("pointer-events","auto");

  this.setState({
    showModal: false,
  });
}
  render() {
    return (
      <section
        className="result"
        onClick={() => {
          this.showModal();
        }}
      >
        <img src={this.props.imageData.urls.small} className="result__img" />
        <ul className="result__tags">
          {this.props.imageData
            ? this.props.imageData.tags.map((value, index) => {
                return (
                  <li key={index} className="results__tag">
                    {value.title}
                  </li>
                );
              })
            : null}
        </ul>
        {this.state.showModal ? (
          <div className="result__overlay">
            <div className="result__overlay__inner">
              <div className="overlay__author">
                <div className="overlay__author__column">
                  <img
                    className="overlay__author__column__img"
                    src={this.props.imageData.user.profile_image.medium}
                  />
                </div>
                <div className="overlay__author__column">
                  <div className="overlay__author__column__name">
                    {this.props.imageData.user.name}
                  </div>
                  <div className="overlay__author__column__name">
                    {this.props.imageData.user.twitter_username
                      ? "@" + this.props.imageData.user.twitter_username
                      : null}
                  </div>
                </div>
              </div>
              <img
                className="overlay__img"
                src={this.props.imageData.urls.regular}
              />
              {this.props.imageData.user.location ? (
                <div className="overlay__location">
                  <RoomIcon />
                  <span>{this.props.imageData.user.location}</span>
                </div>
              ) : null}
              <CloseIcon
                className="overlay__close"
                onClick={() => {
               this.hideModal();
                }}
              />
            </div>
          </div>
        ) : null}
      </section>
    );
  }
}
