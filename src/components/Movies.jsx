import MovieCard from './MovieCard';

function Movies({ movies }) {
  return (
    <div className="movies">
      {!movies ? (
        <h2>No found</h2>
      ) : (
        movies.map((movie) => {
          return <MovieCard key={movie.imdbID} {...movie} />;
        })
      )}
    </div>
  );
}

export default Movies;
