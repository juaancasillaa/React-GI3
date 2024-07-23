import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


function Movie() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (query) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=1ee443d20a248d8d504075f63af53587&query=${query}`)
                .then((response) => response.json())
                .then((data) => {
                    setMovies(data.results);
                    console.log(data.results);
                })
                .catch((error) => console.error("Error fetching movies:", error));
        }
    }, [query]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div className="container"> 
            <h1>Movie Search</h1>
            <input type="text" className="input" onChange={handleInputChange} value={query} placeholder="Search for a movie..." />
        
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <div className="movie">
                            <h3>{movie.title}</h3>
                            {movie.poster_path && (
                               <Link to={`/movie/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} /></Link> 
                            )}
                            <Link to={`/movie/${movie.id}`} className="details-link">View Details</Link>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default Movie;