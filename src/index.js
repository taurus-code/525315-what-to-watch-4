import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import movies from "./mocks/films.js";

const init = () => {
  const dataPromo = {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: `2014`
  };

  ReactDOM.render(
      <App
        promo = {dataPromo}
        movies = {movies}
      />,
      document.querySelector(`#root`));
};

init();
