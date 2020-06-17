import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const dataPromo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`
};

const titleMovies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];


describe(`Renders Main components`, () => {
  it(`Render component Main`, () => {
    const tree = renderer.create(
        <Main
          promo={dataPromo}
          titleMovies={titleMovies}
          titleMovieClickHandler={() => {}}
        />
    ).toJSON;

    expect(tree).toMatchSnapshot();
  });
});
