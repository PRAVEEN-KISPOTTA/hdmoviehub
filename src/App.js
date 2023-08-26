import React from "react";
import MovieList from "./MovieList";
import NavBar from "./NavBar";
import Student from "./Student";
import {movies} from "./MoviesData";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
        movies: movies
    }
    // this.AddStar = this.AddStar.bind(this);
}

addHandler = (movieRef) => {
    const {movies} = this.state;
    const movieId = movies.indexOf(movieRef);
    console.log(movies[movieId]);

    if(movies[movieId].stars >= 5){
        return;
    }
    movies[movieId].stars += 0.5;
    this.setState({
        movies: movies
    })
  };

  removeHandler =(movieRef) =>{
    const {movies} = this.state;
    const movieId = movies.indexOf(movieRef);

    if(movies[movieId].stars <= 0){
        return;
    }
    movies[movieId].stars -= 0.5;
    this.setState({
        movies: movies
    })
  }

  handleFav = (movieRef)=>{
    const {movies} = this.state;
    const movieId = this.state.movies.indexOf(movieRef);
    // console.log("t")
    movies[movieId].fav =  !this.state.movies[movieId].fav;
    this.setState({
        movies: movies
    });
  }

  handleCart=(movieRef)=>{
    const {movies} = this.state;
    const movieId = this.state.movies.indexOf(movieRef);

    movies[movieId].cart = !movies[movieId].cart;

    this.setState({
        movies: movies,
        cartCount: 0
    })
  }

  render(){
    const {movies} = this.state;
    return(
        <>
    
        <NavBar/>
        <MovieList moviesProps={movies}
                    addStarProps={this.addHandler}
                    removeStarProps={this.removeHandler}
                    favHandlerProps={this.handleFav}
                    cartHandlerProps={this.handleCart}/>
        <Student name="Praveen Kispotta" marks={78} />
        </>
    )
  }
}

export default App;


// import MovieList from "./MovieList";
// import NavBar from "./NavBar";
// import Student from "./Student";
// function App(){
//   return(
//     <>
    
//     <NavBar/>
//     <MovieList />
//     <Student name="Praveen Kispotta" marks={78} />
//     </>
//   )
// }

// export default App;