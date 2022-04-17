import React, { useContext, useState } from 'react';
import { MovieContext } from '../contexts/MovieContext';

const NewMovieForm = () => {
    const { addMovie } = useContext(MovieContext);
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, director);
        addMovie(title, director);
        setTitle('');
        setDirector('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="movie title" value={title}
                onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="movie director" value={director}
                onChange={(e) => setDirector(e.target.value)} required />   
            <input type="submit" value="add movie" />
        </form>
    );
}

export default NewMovieForm;