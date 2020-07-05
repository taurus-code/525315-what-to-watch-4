import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const titleMovieClickHandler = () => {};

const App = (props) => {
  const {promo, movies} = props;
  return (
    <Main
      promo={promo}
      movies={movies}
      titleMovieClickHandler={titleMovieClickHandler}
    />
  );
};

App.propTypes = {
  promo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
  }).isRequired,
  movies: PropTypes.array.isRequired,
};

export default App;
