import { MovieWrap } from './Movie.styled';
import PropTypes from 'prop-types';

const Movie = ({ state }) => {
  console.log(state);
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

Movie.propTypes = {
  state: PropTypes.shape({
    genres: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};

export default Movie;
