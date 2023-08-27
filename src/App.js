import React from "react";
import MovieList from "./MovieList";
import NavBar from "./NavBar";
import Student from "./Student";
import {moviesData} from "./MoviesData";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
        movie: moviesData,
        cartCount: 0
    }
    // this.AddStar = this.AddStar.bind(this);
}

addHandler = (movieRef) => {
    const {movie} = this.state;
    const movieId = movie.indexOf(movieRef);
    console.log(movie[movieId]);

    if(movie[movieId].stars >= 5){
        return;
    }
    movie[movieId].stars += 0.5;
    this.setState({
        movie: movie
    })
  };

  removeHandler =(movieRef) =>{
    const {movie} = this.state;
    const movieId = movie.indexOf(movieRef);

    if(movie[movieId].stars <= 0){
        return;
    }
    movie[movieId].stars -= 0.5;
    this.setState({
        movies: movie
    })
  }

  handleFav = (movieRef)=>{
    const {movie} = this.state;
    const movieId = this.state.movie.indexOf(movieRef);
    // console.log("t")
    movie[movieId].fav =  !this.state.movie[movieId].fav;
    this.setState({
        movie: movie
    });
  }

  handleCart=(movieRef)=>{
    let {movie, cartCount} = this.state;
    const movieId = this.state.movie.indexOf(movieRef);

    movie[movieId].cart = !movie[movieId].cart;

    // this.setState({
    //     movie: movie,
    //     cartCount: 0
    // })

    // (movie[movieId].cart) ? console.log(1) : console.log(-1)

    if(movie[movieId].cart){
      cartCount += 1;
    }
    else{
      cartCount -= 1;
    }

    this.setState({
      movie: movie,
      cartCount: cartCount
    })

  }

  render(){
    const {movie, cartCount} = this.state;
    return(
        <>
    
        <NavBar cartCountHandler={cartCount}/>
        <MovieList moviesProps={movie}
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