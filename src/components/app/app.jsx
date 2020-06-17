import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const titleMovieClickHandler = () => {};

const App = (props) => {
  const {promo, titleMovies} = props;
  return (
    <Main
      promo={promo}
      titleMovies = {titleMovies}
      titleMovieClickHandler = {titleMovieClickHandler}
    />
  );
};

App.propTypes = {
  promo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
  }).isRequired,
  titleMovies: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  titleMovieClickHandler: PropTypes.func.isRequired,
};

export default App;
