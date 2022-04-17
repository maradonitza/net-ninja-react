import React, {createContext, useState} from "react";
import { v4 as uuid} from 'uuid';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const [movies, setMovies] = useState([
        {title: 'Gladiator', director: 'Scott Ridley', id: 1},
        {title: 'Braveheart', director: 'Mel Gibson', id: 2},
        {title: 'What dreams may come', director: 'Vincent Ward', id: 3}
    ]);
    const addMovie = (title, director) => {
        setMovies([...movies, {title: title, director: director, id: uuid()}])
    }
    const removeMovie = (id) => {                           
        setMovies(movies.filter(movie => movie.id !== id));   
    }
    return (
        <MovieContext.Provider value={{movies, addMovie, removeMovie}}>
            {props.children}
        </MovieContext.Provider>
    );
}
 
export default MovieContextProvider;
