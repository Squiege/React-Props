// Hard code the movie list
// Using ?, Create a toggle button that shows the details when the movie is clicked
// Remove the movie with a button
// Using ?, Create a button that will show only a specific Genre of movie titles

import { useState } from 'react';

const MoviesList = () => {
    // Initialize state with a list of movies
    const [movies, setMovies] = useState([
        { id: 1, title: "The Ritual", details: "A Group of Hikers encounter a cryptid creature."}, 
        { id: 2, title: "The Ridiculous 6", details: "A group of brother are on a quest to find their father."}, 
        { id: 3, title: "Terrifier", details: "A psycho clown killer is on the loose."}, 
        { id: 4, title: "A Man Called Otto", details: "A depressed man attempt to join his wife in the afterlife."},
    ]);
    const [viewMovies, setViewMovies] = useState(true);
    const [showDetails, setShowDetails] = useState(false);
    // Implement required functionalities here
    const handleHorrorMovies = () => {
        setViewMovies(false);
        setMovies([
            { id: 1, title: "The Ritual", details: "A Group of Hikers encounter a cryptid creature."}, 
            { id: 2, title: "Terrifier", details: "A psycho clown killer is on the loose."},
        ])
    }

    const handleAllMovies = () => {
        setViewMovies(true);
        setMovies([
            { id: 1, title: "The Ritual", details: "A Group of Hikers encounter a cryptid creature."}, 
        { id: 2, title: "The Ridiculous 6", details: "A group of brother are on a quest to find their father."}, 
        { id: 3, title: "Terrifier", details: "A psycho clown killer is on the loose."}, 
        { id: 4, title: "A Man Called Otto", details: "A depressed man attempt to join his wife in the afterlife."},
        ])
    }

    const removeMovie = (id) => {
        setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
    }

    const toggleDetails = () => {
        setShowDetails((prev) => !prev);
    };

    return (
        <div>
            {viewMovies ? (
                <button onClick={handleHorrorMovies}>View Horror Movies</button>
            ) : (
                <button onClick={handleAllMovies}>View All Movies</button>
            )}
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title}
                        <button
                            onClick={() => removeMovie(movie.id)}
                            style={{
                                marginLeft: '10px',
                                padding: '5px 10px',
                                backgroundColor: 'red',
                                color: 'white',
                            }}
                        >
                            Remove
                        </button>
                        <button
                            onClick={() => toggleDetails(movie.id)}
                            style={{
                                marginLeft: '10px',
                                padding: '5px 10px',
                                backgroundColor: 'red',
                                color: 'white',
                            }}
                        >
                            Details
                        </button>
                        <div style ={{ display: showDetails ? 'block' : 'none'}}>
                            <p>{movie.details}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default MoviesList;