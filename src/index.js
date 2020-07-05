import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {movies, promoMovie} from "./mocks/films.js";

const init = () => {

  ReactDOM.render(
      <App
        promo = {promoMovie}
        movies = {movies}
      />,
      document.querySelector(`#root`));
};

init();
