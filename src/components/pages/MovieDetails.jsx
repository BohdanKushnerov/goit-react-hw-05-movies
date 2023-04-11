import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { MovieWrap } from './MovieDetails.styled';

const MovieDetails = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'fetchMovie':
        return { ...state, ...action.payload };
      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, {});
  const { movieId } = useParams();

  const location = useLocation();
  // const backLinkHref = location.state?.from ?? `/movies/${movieId}`; // разобраться с значение по умолчанию
  const backLinkHref = location.state?.from ?? `/`; // разобраться с значение по умолчанию

  console.log(location.state);

  useEffect(() => {
    const abortController = new AbortController();

    // Request function
    async function fetchMovie() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US`,
        { signal: abortController.signal }
      );

      const { vote_average, overview, title, genres, poster_path } =
        response.data;

      const normalizedData = {
        vote_average,
        overview,
        title,
        genres: stringFromGanresArray(genres),
        poster_path: `https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`,
      };

      function stringFromGanresArray(array) {
        const string = array.reduce((acc, value) => {
          return (acc += value.name);
        }, '');

        return string.split(/(?=[A-Z])/).join(', ');
      }

      dispatch({
        type: 'fetchMovie',
        payload: {
          ...normalizedData,
        },
      });
    }

    fetchMovie();

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  const { vote_average, overview, title, genres, poster_path } = state;

  return (
    <>
      {state && (
        <div>
          <Link to={backLinkHref}>Back to products</Link>
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

          <ul>
            <li>
              <Link to="cast">CAST</Link>
            </li>
            <li>
              <Link to="reviews">REVIEWS</Link>
            </li>
            <Outlet />
          </ul>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
