import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case 'fetchMovie':
        return { ...state, ...action.payload };
      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, {});
  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    // Request function
    async function fetchMovie() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US`,
        { signal: abortController.signal }
      );

      console.log(response.data);

      const { vote_average, overview, title, genres, poster_path } =
        response.data;

      const normalizeData = {
        vote_average,
        overview,
        title,
        genres: stringFromGanresArray(genres),
        poster_path: `https://image.tmdb.org/t/p/w500${poster_path}`,
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
          ...normalizeData,
        },
      });
    }

    fetchMovie();

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  const { vote_average, overview, title, genres, poster_path } = state;

  // w600_and_h900_bestv2

  return (
    <>
      {state && (
        <div>
          <h2>{title}</h2>
          <img src={poster_path} alt={title} />
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>

          <ul>
            <li>
              <Link to="cast">CAST</Link>
            </li>

            <Outlet />
          </ul>
        </div>
      )}
    </>
  );
};
// назва, %, овервю, опис, генрес, драмма.

export default MovieDetails;
