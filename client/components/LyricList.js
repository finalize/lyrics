import React, { Component } from "react";
import { Link, hashHistory } from "react-router";
import { graphql } from "react-apollo";

class LyricList extends Component {
  renderLyrics() {
    return this.props.lyrics.map(({ id, content }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <i className="material-icons">thumb_up</i>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="collection">{this.props.lyrics && this.renderLyrics()}</ul>
    );
  }
}

export default LyricList;
