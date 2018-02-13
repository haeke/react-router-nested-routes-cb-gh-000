import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  const movies = props.movies.map(movie => <li key={movie.id}>{movie.title}</li>);
  return (
    <div>
      <div className='col-md-4'>
        <ul>
          {movies}
        </ul>
      </div>
    </div>
  );
};
