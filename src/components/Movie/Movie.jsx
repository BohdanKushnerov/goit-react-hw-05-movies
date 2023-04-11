import { MovieWrap } from './Movie.styled';

const Movie = ({ state }) => {
  const { vote_average, overview, title, genres, poster_path } = state;

  return (
    <MovieWrap>
      <img src={poster_path} alt={title} />

      <div>
        <h2>{title}</h2>
        <p>User score: {Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </div>
    </MovieWrap>
  );
};

export default Movie;
