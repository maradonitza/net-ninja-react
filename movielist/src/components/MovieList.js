import React, {useContext} from "react";
import { MovieContext } from "../contexts/MovieContext";

const Navbar = () => {
    const {movies} = useContext(MovieContext);
    return (
        <div className="navbar">
            <h1>Our movie list</h1>
            <p>Number of movies in our list: {movies.length}</p>
        </div>
    );
}
 
export default Navbar;
