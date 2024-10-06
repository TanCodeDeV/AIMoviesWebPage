import { aiMovies } from "./Data/AiMovies";
import "./movie.css";
const Movie = () => {
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer"); // Open the URL in a new tab
  };

  return (
    <div className="movie-container">
      <h2>Movies</h2>
      <ul className="movie-list" style={{ listStyleType: "none" }}>
        {aiMovies.map((movie) => (
          <li className="movie-style" key={movie.id}>
            <h4>{movie.title}</h4>
            {/* Adding a simple style to ensure image visibility */}
            <img
              src={movie.poster}
              alt={movie.title}
              style={{ width: "300px", height: "450px", cursor: "pointer" }} // explicitly defining width and height
              onClick={() => handleClick(movie.wikiUrl)} // Call handleClick on image click
              onMouse
            />
            <p>
              {movie.title} by {movie.director} was relesed on {movie.year}
            </p>
            <p> Rating: {movie.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movie;
