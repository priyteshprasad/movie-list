import { useState } from "react";
import "./Genre.css";
const GenreFilter = ({ genres, onGenreSelect, onResetFilter }) => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
    onGenreSelect(genre);
  };

  const handleResetClick = () => {
    setSelectedGenre(null);
    onResetFilter();
  };

  return (
    <div className="genre-filter">
      <h2>Filter By Genre</h2>
      {genres.map((genre, index) => (
        <button
          key={index}
          onClick={() => handleGenreClick(genre)}
          className={selectedGenre === genre ? "selected" : ""}
        >
          {genre}
        </button>
      ))}
      <button className="reset-button" onClick={handleResetClick}>
        Reset Filter
      </button>
    </div>
  );
};

export default GenreFilter;
