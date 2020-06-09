import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const init = () => {
  const dataPromo = {
    titlePromo: `The Grand Budapest Hotel`,
    genrePromo: `Drama`,
    releaseDatePromo: `2014`
  };

  ReactDOM.render(<App titlePromo={dataPromo.titlePromo} genrePromo={dataPromo.genrePromo} releaseDatePromo={dataPromo.releaseDatePromo}/>, document.querySelector(`#root`));
};

init();
