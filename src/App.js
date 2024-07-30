import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
// import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        searchMovies("Ant");
    }, []);

    const searchMovies = async (title) => {
        // const response = await fetch(`${API_URL}&s=${title}`);
        // const data = await response.json();

        const response = await axios.get(`${API_URL}`, {
            params: {
                s: title
            },
            headers: {
                'Content-Type': 'application/json',
            }
        });

        setMovies(response.data.Search);
    };

    return (
        <div className="app">
            {/* Header */}
            <h1>MovieLand</h1>

            {/* The Search Input */}
            <div className="search">
                <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for movies"
                />
                <img
                    src={"https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {/* Display the Movies */}
            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))}
                </div>
            ) : (
                // Something to display if unable to get the movies
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    );
};

export default App;