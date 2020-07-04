import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CardMovie from "./movie-card";

Enzyme.configure({
  adapter: new Adapter(),
});


const movieCard = {
  title: `Пираты карбинского моря`,
  poster: {
    src: `img/johnny-english.jpg`,
    alt: `Пираты карбинского моря`,
  },
  addressPage: `movie-page.html`,
};


describe(`test component Movie Card`, () => {
  it(`Should active Movie card`, () => {
    const titleMovieClickHandler = jest.fn();
    const cardMovieHoverHandler = jest.fn((...args) => [...args]);

    const movie = shallow(
        <CardMovie
          movie={movieCard}
          titleMovieClickHandler={titleMovieClickHandler}
          cardMovieHoverHandler={cardMovieHoverHandler}
        />
    );

    movie.simulate(`mouseenter`, {preventDefault() {}});

    expect(cardMovieHoverHandler).toHaveBeenCalledTimes(1);
    expect(cardMovieHoverHandler.mock.calls[0][0]).toMatchObject(movie);
  });
});
