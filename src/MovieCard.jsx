
import React from 'react';

/**
 * Renders a movie card component with the provided movie data.
 *
 * @param {Object} props - The props object containing the movie data.
 * @return {JSX.Element} The rendered movie card component.
 */
const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;