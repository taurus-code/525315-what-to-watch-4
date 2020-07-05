import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const dataPromo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`
};

const movies = [
  {
    title: `Пираты карбинского моря`,
    poster: {
      src: `img/johnny-english.jpg`,
      alt: `Пираты карбинского моря`,
    },
    addressPage: `movie-page.html`,
  },
  {
    title: `Преступление Гринлевальда`,
    poster: {
      src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      alt: `Преступление Гринлевальда`,
    },
    addressPage: `movie-page.html`,
  },
];

describe(`Renders app components`, () => {
  it(`Render App component`, () => {
    const tree = renderer.create(
        <App
          promo = {dataPromo}
          movies = {movies}
          titleMovieClickHandler = {() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
