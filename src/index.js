import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const init = () => {
  const dataPromo = {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: `2014`
  };

  const titleMovies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

  ReactDOM.render(
      <App
        promo = {dataPromo}
        titleMovies = {titleMovies}
      />,
      document.querySelector(`#root`));
};

init();
