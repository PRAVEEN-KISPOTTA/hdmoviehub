import React from "react";
import  "./App.css";

class Moviecard extends React.Component{

     addStar=()=>{
        // this.state.stars += 0.5;
        // console.log(this.state.stars);


        if(this.state.stars < 5){

            /* FIRST FORM */
        //     this.setState({
        //         stars: this.state.stars + 0.5
        //     });

        /* SECOND FORM */

        this.setState((prevState)=>({
            // return{
                stars: prevState.stars + 0.5
            // }
        }));
        }



    }

    removeStars=()=>{
        if(this.state.stars>0){
            this.setState((prevState) =>{
                return{
                    stars: prevState.stars - 0.5
                }
            })
        }
    }

    handleFav=() =>{
        this.setState({
            fav: !this.state.fav
        })
    }

    handleCart=() =>{
        this.setState({
            cart: !this.state.cart
        })
    }
    render(){

        // console.log(this.props.movies)
        const {title, plot, price, rating, stars, fav, cart} = this.props.moviesProps;
        const {addStar, removeStar, moviesProps, favHandler, cartHandler} = this.props;
        return(
            <>
            <div className="main-container">
                <div className="left-container">
                    <img src="https://www.themoviedb.org/t/p/original/qMxAmzGQO722q0UlssCOPhrXmvX.jpg" alt="Poster" />
                </div>
                <div className="right-container">
                    <div className="title-section">{title}</div>
                    <div className="plot-section">{plot}</div>
                    <div className="price-section">Rs. {price}</div>

                    <div className="bottom-section">
                        <div className="rating-section">
                            <span className="rating-number">{rating}</span>
                            <span className="rating-icon">
                                <div>
                                   <img 
                                        className="btn minus-btn" 
                                        alt="" 
                                        src="https://cdn-icons-png.flaticon.com/128/10238/10238606.png"
                                        onClick={()=>{removeStar(moviesProps)}}
                                        />

                                   <span className="star-rating">{stars}</span>

                                   <img 
                                        className="btn plus-btn" 
                                        alt="" 
                                        src="https://cdn-icons-png.flaticon.com/128/1828/1828817.png" 
                                        onClick={() => {addStar(moviesProps)}}
                                        />
                                </div>
                            </span>
                        </div>
                        <div className="btn-section">
                            {(fav) ? <button className="fav-btn" onClick={()=>{favHandler(moviesProps)}}>Favourite</button> : <button className="fav-btn" onClick={()=> {favHandler(moviesProps)}}>Un-favourite</button>}
                            
                            {!cart ? <button className="buy-btn" onClick={()=>{cartHandler(moviesProps)}}>Buy Now</button> : <button className="buy-btn" onClick={()=>{cartHandler(moviesProps)}}>Remove</button>}
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default Moviecard;