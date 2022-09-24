import React from 'react'
import HigherOrder from './HigherOrder';

const MoviesTitle = (props) => {
  const {movies} = props  
  return (
    <>
    <h2>All Movies Titles</h2>
    <div>
          {

            movies.map(movie => <p key={movie.id}>{movie.title}</p>)
          }
    
    </div>
    </>

  )
}

export default HigherOrder(MoviesTitle)