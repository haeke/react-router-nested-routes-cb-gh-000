import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import MoviesList from '../components/MoviesList';
import MovieShow from './MovieShow';
// import {bindActionCreators} from 'redux';
//
// import {fetchMovies} from '../actions'


const MoviesPage = ({ match, movies }) =>
  <div>
    <MovieList movies={movies} />
  </div>

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
}

export default connect(mapStateToProps)(MoviesPage);
