import React from 'react'
import styled from 'styled-components'
import HigherOrder from './HigherOrder'

const MoviesThumbNail = (props) => {
    const {movies} = props
    return (
    <Wrap>
        {
            movies.map(movie => 
                <Content>
                <img src={movie.poster} style={{width:"200px",height: "200px"}} />
                <h5>{movie.title}</h5>
                <h5>{movie.year}</h5>
                </Content>
            )
        }
    </Wrap>
  )
}

export default HigherOrder(MoviesThumbNail)


const Wrap = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const Content = styled.div`
    margin: 5px 20px;
    border: 1px solid gray;
    padding: 5px;

`