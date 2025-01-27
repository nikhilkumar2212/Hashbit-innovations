import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MovieList.css";

const images = {
  movie1: require("../assets/movie1.jpg"),
  movie2: require("../assets/movie2.jpg"),
  movie3: require("../assets/movie3.jpg"),
  movie4: require("../assets/movie4.jpg"),
  movie5: require("../assets/movie5.jpg"),
  movie6: require("../assets/movie6.jpg"),
  movie7: require("../assets/movie7.jpg"),
  movie8: require("../assets/movie8.jpg"),
  movie9: require("../assets/movie9.jpg"),
  movie10: require("../assets/movie10.jpg"),
  movie11: require("../assets/movie11.jpg"),
  movie12: require("../assets/movie12.jpg"),
};

const movies = [
  { id: 1, name: "Avatar", imageKey: "movie1" },
  { id: 2, name: "Monster House", imageKey: "movie2" },
  { id: 3, name: "Titanic", imageKey: "movie3" },
  { id: 4, name: "The Matrix", imageKey: "movie4" },
  { id: 5, name: "Red Coat", imageKey: "movie5" },
  { id: 6, name: "The Witcher", imageKey: "movie6" },
  { id: 7, name: "Aladin", imageKey: "movie7" },
  { id: 8, name: "Avatar: The Way of Water", imageKey: "movie8" },
  { id: 9, name: "Split", imageKey: "movie9" },
  { id: 10, name: "Oppenheimer", imageKey: "movie10" },
  { id: 11, name: "Jurassic Park", imageKey: "movie11" },
  { id: 12, name: "Interstellar", imageKey: "movie12" },
];

const MovieList = () => {
  const navigate = useNavigate(); // useNavigate for routing

  const handleViewBookedSeats = () => {
    navigate("/booked-seats"); // Navigate to the booked seats page
  };

  return (
    <div className="movie-list-container">
      <header className="header">
  <div className="logo-container">
    <h2>Movies</h2>
  </div>
  <button className="view-booked-seats-btn" onClick={handleViewBookedSeats}>
    View Booked Seats
  </button>
</header>



      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img src={images[movie.imageKey]} alt={movie.name} />
            <h3>{movie.name}</h3>
            <Link to={`/details/${movie.id}`} className="details-button">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
