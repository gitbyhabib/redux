import React, { Component } from "react";

import { connect } from "react-redux";

import { moviesList, getUser } from "../store/actions";
class Home extends Component {
  getMoviesHandler() {
    this.props.dispatch(moviesList());
    console.log("dispatcher Called");
  }
  getUserHandler() {
    this.props.dispatch(getUser());
  }

  render() {
    console.log(this.props);
    const { movies } = this.props;
    return (
      <>
        {movies && movies.MoviesList
          ? movies.MoviesList.map((item) => (
              <div key={item.id}>name: {item.name}</div>
            ))
          : null}

        <button onClick={() => this.getMoviesHandler()}>Get movies</button>
        <button onClick={() => this.getUserHandler()}>Get users</button>
      </>
    );
  }
}

const maptoprops = (state) => {
  return { movies: state.movies };
};

export default connect(maptoprops)(Home);
