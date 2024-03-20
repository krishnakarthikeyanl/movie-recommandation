import React from "react";

const MovieDetails = ({ movie, onClose }) => {
  return (
    <div className="movie-details">
      <div className="close-btn" onClick={onClose}>Close</div>
      <h2>{movie.title}</h2>
      <img src={movie.posterURL} alt={movie.title} />
      <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum magna quis mauris lacinia, non rhoncus ipsum vulputate. Duis efficitur, est id vestibulum pharetra, arcu libero dapibus sapien.</p>
      <p>Release Year: 2023</p>
      {/* Add more movie details here */}
    </div>
  );
};

export default MovieDetails;
