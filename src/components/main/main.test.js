import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

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


describe(`Renders Main components`, () => {
  it(`Render component Main`, () => {
    const tree = renderer.create(
        <Main
          promo={dataPromo}
          movies={movies}
          onClick={() => {}}
        />
    ).toJSON;

    expect(tree).toMatchSnapshot();
  });
});
