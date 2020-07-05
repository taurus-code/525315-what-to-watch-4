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
    const onClick = jest.fn();
    const cardMovieHoverHandler = jest.fn((...args) => [...args]);

    const movie = shallow(
        <CardMovie
          movie={movieCard}
          onClick={onClick}
          cardMovieHoverHandler={cardMovieHoverHandler}
        />
    );

    movie.simulate(`mouseenter`, {preventDefault() {}});

    const titleMovie = movie.find(`a.small-movie-card__link`);
    titleMovie.simulate(`click`, {
      preventDefault: () => {
      },
      stopPropagation: () => {
      },
    });

    expect(onClick).toHaveBeenCalledTimes(1);

    expect(cardMovieHoverHandler).toHaveBeenCalledTimes(1);
    expect(cardMovieHoverHandler.mock.calls[0][0]).toMatchObject(movie);
  });
});

