import React from "react";
import PropTypes from "prop-types";

const CardMovie = (props) => {
  const {title, poster, addressPage, titleMovieClickHandler} = props;
  const {src, alt} = poster;

  return (<article className="small-movie-card catalog__movies-card">
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
        onClick={titleMovieClickHandler}>
        {title}
      </a>
    </h3>
  </article>);
};

CardMovie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  addressPage: PropTypes.string.isRequired,
  titleMovieClickHandler: PropTypes.func.isRequired,
};

export default CardMovie;
