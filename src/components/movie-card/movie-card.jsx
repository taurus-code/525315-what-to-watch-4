import React from "react";
import PropTypes from "prop-types";

const CardMovie = (props) => {
  const {movie, onClick, cardMovieHoverHandler} = props;
  const {title, poster, addressPage} = movie;
  const {src, alt} = poster;

  const cardMovieClickHandler = (evt) => {
    evt.preventDefault();
    onClick(movie);
  };

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={cardMovieHoverHandler}
      onClick={cardMovieClickHandler}
    >
      <div className="small-movie-card__image">
        <img
          src={src}
          alt={alt}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href={addressPage}
          onClick={cardMovieClickHandler}>
          {title}
        </a>
      </h3>
    </article>);
};

CardMovie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    addressPage: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  cardMovieHoverHandler: PropTypes.func.isRequired,
};

export default CardMovie;
