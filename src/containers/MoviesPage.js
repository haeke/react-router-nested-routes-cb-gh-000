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

class MoviesPage extends Component {
  render(){
    return(
      <div>
        <MoviesList movies={this.props.movies} />
      </div>)
  }
}

function mapStateToProps(state){
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps)(MoviesPage);
