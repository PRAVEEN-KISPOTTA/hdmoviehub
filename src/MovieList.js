import {Component} from "react";
import Moviecard from "./Moviecard";
// import App from "./App";

class MovieList extends Component{

    constructor(){
        super();
        this.state = {
            movies:[
                {
                    title: "The Avenger 1",
                    plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                    price: 199,
                    rating: 8.7,
                    stars: 0,
                    fav: true,
                    cart: false,
                    itemCount: 0
                },

                {
                    title: "The Avenger 2",
                    plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                    price: 199,
                    rating: 8.7,
                    stars: 0,
                    fav: true,
                    cart: false,
                    itemCount: 0
                },

                {
                    title: "The Avenger 3",
                    plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                    price: 199,
                    rating: 8.7,
                    stars: 0,
                    fav: true,
                    cart: false,
                    itemCount: 0
                }
            ]
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
            movies: movies
        })
      }
    render(){
        // const {title, plot, price, rating, stars, fav, cart} = this.state;
        // console.log("inside movieList = ", this.state.movies[1])

        const {movies} = this.state
        return(
            <>
            {movies.map((props, index) => (
                
                <div key={index}>
                    <Moviecard moviesProps={props}
                                addStar={this.addHandler}
                                removeStar={this.removeHandler}
                                favHandler={this.handleFav}
                                cartHandler={this.handleCart}
                                />

                    
                </div>
                
                ))}

                {/* <App count={movies.itemCount}/> */}
            </>
        )
    }
}

export default MovieList;