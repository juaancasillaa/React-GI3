import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Moviedetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1ee443d20a248d8d504075f63af53587`)
            .then((response) => response.json())
            .then((data) => {
                setMovie(data);
            })
            .catch((error) => console.error("Error fetching movie details:", error));
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className="movie-detail">
            <h1>{movie.title}</h1>
            {movie.poster_path && (
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
            )}
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
            <Link to='/'><button id='return-btn'>return</button></Link>
        </div>
    );
}

export default Moviedetail;