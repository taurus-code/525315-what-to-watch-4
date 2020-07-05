import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

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

describe(`Test components Main`, () => {
  it(`Should titleMovie Main pressed`, () => {
    const titleMovieClickHandler = jest.fn();

    const main = mount(
        <Main
          promo={dataPromo}
          movies={movies}
          titleMovieClickHandler={titleMovieClickHandler}
        />
    );

    const titleLink = main.find(`a.small-movie-card__link`).first();

    titleLink.simulate(`click`, {preventDefault() {}});

    expect(titleMovieClickHandler).toHaveBeenCalledTimes(1);
  });
});
