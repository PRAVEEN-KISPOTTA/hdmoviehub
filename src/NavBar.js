import { Component } from "react";
import styled from "styled-components";

class NavBar extends Component{
    render(){
        // const {rating} = this.props.moviesProps;
        return(
            <>
            <Container className="navBarContainer" style={styles.nav}>
                <h1><span className="heading-left-section">Hd</span><span className="heading-mid-section">Movie</span><span className="heading-right-section">Hub</span></h1>

                <div className="navBarCartContainer">
                    <CartCount className="navBarCartCount" color="yellow" show={"true"}>{this.props.cartCountHandler}</CartCount>
                    <NavBarCart className="navBarCart" src="https://cdn-icons-png.flaticon.com/128/3737/3737372.png" alt="" />
                    
                </div>
                {/* {console.log("count=", this.props.cartCountHandler)} */}
            </Container>
            </>
        )
    }
}

export default NavBar;

/*----------------inline-style-----------------*/
const styles = {
    nav: {  width: "100%", 
    height: "70px", 
    border: "2px solid white", 
    display: "flex", 
    justifyContent: "space-between"
}
}


/*----------------styled-component----------------*/
const Container = styled.div`
background-color: rgb(121, 178, 178);
`;

const NavBarCart = styled.img`
height: 40%;
background-color: white;
&:hover{background-color: orange};
`;

const CartCount = styled.div`
background-color: ${(props)=> props.color};
color: black;
border-radius: 50%;
visibility: ${(props)=> props.show ? "visible" : "hidden"};
`;//