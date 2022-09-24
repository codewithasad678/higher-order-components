import React from 'react'

 const HigherOrder = (WrappedComponents) => {

     class EnhancedComponent extends React.Component {

        constructor(props) {
          super(props)
        
          this.state = {
             movies: []
          }
        }
        componentDidMount(){
             fetch(`https://json-faker.onrender.com/movies`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({movies : data.movies})
            })
            
        }
        render(){
        // console.log(this.state.movies)
            return(
                <>
                    {
                        this.state.movies.length > 0 ? (  <WrappedComponents movies={this.state.movies} /> ) : <div>Not FOund</div>
                    }
                </>
            )
        }
    }
    // return the enhanced components
  return EnhancedComponent
}

export default HigherOrder