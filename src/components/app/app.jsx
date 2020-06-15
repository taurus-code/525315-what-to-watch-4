import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {promo, titleMovies} = props;
  return (
    <Main
      promo={promo}
      titleMovies = {titleMovies}
    />);
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
};

export default App;
