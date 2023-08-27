import {Component} from "react";
import Moviecard from "./Moviecard";

class MovieList extends Component{

    render(){
        // const {title, plot, price, rating, stars, fav, cart} = this.state;
        // console.log("inside movieList = ", this.state.movies[1])

        const {moviesProps, addStarProps, removeStarProps, favHandlerProps, cartHandlerProps} = this.props;
        console.log(this.props)
        return(
            <>
            {moviesProps.map((props, index) => (
                
                <div key={index}>
                    <Moviecard movies={props}
                                addStar={addStarProps}
                                removeStar={removeStarProps}
                                favHandler={favHandlerProps}
                                cartHandler={cartHandlerProps}
                                />

                    
                </div>
                
                ))}

                {/* <App count={movies.itemCount}/> */}
            </>
        )
    }
}

export default MovieList;