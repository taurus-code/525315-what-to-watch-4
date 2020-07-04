import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import CardMovieDetails from "../movie-page-details/movie-page-details.jsx";


class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {promo, movies} = this.props;

    return (
      <Main
        promo={promo}
        movies={movies}
        titleMovieClickHandler={() => {}}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            {this._renderApp()}
          </Route>

          <Route exact path="/movie-page-details">
            <CardMovieDetails/>
          </Route>

        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  promo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
  }).isRequired,
  movies: PropTypes.array.isRequired,
};

export default App;
