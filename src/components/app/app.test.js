import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const dataPromo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`
};

const titleMovies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

describe(`Renders app components`, () => {
  it(`Render App component`, () => {
    const tree = renderer.create(
        <App
          promo = {dataPromo}
          titleMovies = {titleMovies}
          titleMovieClickHandler = {() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
