import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
//
// import {fetchMovies} from '../actions'

import MoviesList from '../components/MoviesList';

const MoviesPage = ({ movies }) =>
  <div>
    <MovieList movies={movies} />
  </div>

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps)(MoviesPage);
