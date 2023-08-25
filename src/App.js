// import React from "react";
// class App extends React.Component{

//   render(){
//     return(
//       <h1>Class Component</h1>
//     )
//   }
// }

// export default App;
import MovieList from "./MovieList";
import NavBar from "./NavBar";
import Student from "./Student";
function App(){
  return(
    <>
    
    <NavBar/>
    <MovieList />
    <Student name="Praveen Kispotta" marks={78} />
    </>
  )
}

export default App;