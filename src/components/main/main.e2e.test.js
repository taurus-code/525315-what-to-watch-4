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

const titleMovies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];


describe(`Test components Main`, () => {
  it(`Should titleMovie Main pressed`, () => {
    const titleMovieClickHandler = jest.fn();

    const main = mount(
        <Main
          promo={dataPromo}
          titleMovies={titleMovies}
          titleMovieClickHandler={titleMovieClickHandler}
        />
    );

    const titleLink = main.find(`a.small-movie-card__link`).first();

    titleLink.simulate(`click`, {preventDefault() {}});

    expect(titleMovieClickHandler).toHaveBeenCalledTimes(1);
  });
});
