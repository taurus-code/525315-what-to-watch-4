import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CardMovie from "../movie-card/movie-card.jsx";

class ListMovies extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: [false, false, false, false, false, false, false, false],
    };
  }

  render() {
    const {movies} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie, index) => (
          <CardMovie
            key={`${movie.title}-${index}`}
            movies={movies}
            titleMovieClickHandler={() => {}}
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
