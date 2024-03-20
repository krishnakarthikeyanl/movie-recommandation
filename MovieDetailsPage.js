const MovieDetails = ({ movies }) => {
    const { id } = useParams();
    const movie = movies.find((movie) => movie.id === parseInt(id));
    if (!movie) {
      return <div>Movie not found</div>;}
    return (
      <div className="movie-details">
        <div className="movie-image">
          <img src={movie.posterURL} alt={movie.title} />
        </div>
        <div className="movie-info">
          <h2>{movie.title}</h2>
          <p>Description: A  film about a group of friends from the small town  who embark on a series of misadventure.</p>
          <p>Duration:  2:16 mins</p>
          {/* Add more movie details here */}
        </div>
      </div>
    );
  };