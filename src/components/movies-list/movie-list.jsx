import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CardMovie from "../movie-card/movie-card.jsx";

class ListMovies extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovieCard: null,
    };
  }

  render() {
    const {movies, titleMovieClickHandler} = this.props;
    return (
      <div className="catalog__movies-list">
        {movies.map((movie, index) => (
          <CardMovie
            key={`${movie.title}-${index}`}
            movie={movie}
            titleMovieClickHandler={titleMovieClickHandler}
            cardMovieHoverHandler={() => {
              this.setState(() => ({
                activeMovieCard: movie,
              }));
            }}
          />
        ))}
      </div>
    );
  }

}

ListMovies.propTypes = {
  movies: PropTypes.array.isRequired,
  titleMovieClickHandler: PropTypes.func.isRequired,
};

export default ListMovies;
