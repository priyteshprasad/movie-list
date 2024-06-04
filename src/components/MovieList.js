import "./Movies.css";

const MovieList = ({ movies }) => {
  return (
    <table className="movie-table">
      <thead>
        <tr>
          <th className="title-column">Title</th>
          <th className="genre-column">Genre</th>
          <th className="year-column">Year</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie, index) => (
          <tr key={index}>
            <td>{movie.title}</td>
            <td>{movie.genre}</td>
            <td>{movie.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieList;
