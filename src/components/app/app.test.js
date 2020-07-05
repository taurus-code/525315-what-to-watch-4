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
    background: {
      src: `img/pirats.jpg`,
      alt: `Пираты карбинского моря`,
    },
    title: `Пираты карбинского моря`,
    genre: `Fantastic`,
    year: `1996`,
    rating: {
      score: 9.9,
      count: 10,
    },
    descriptions: [
      `In the 1970s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-className service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
    ],
    directors: [
      `Sas`,
      `Kek`,
      `Sas`,
      `Kek`,
      `Sas`,
      `Kek`
    ],
    starrings: [
      `Bill Murray`,
      `Edward Norton`,
      `Jude Law`,
      `Willem Dafoe`
    ],
    poster: {
      src: `img/poster-pirates.jpg`,
      alt: `Пираты карбинского моря`,
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
          onClick = {() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
