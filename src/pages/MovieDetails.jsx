import { useRef, useEffect, useReducer } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { fetchMovie } from 'services/Fetch';
import Movie from 'components/Movie/Movie';

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

  const { current } = useRef(location.state?.from ?? `/`);

  useEffect(() => {
    const abortController = new AbortController();

    // IIFE
    (async function fetch() {
      try {
        const movie = await fetchMovie(movieId, abortController);

        dispatch({
          type: 'fetchMovie',
          payload: {
            ...movie,
          },
        });
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <div>
      <Link to={current}>Back to products</Link>

      {/* {Object.keys(state).length !== 0 ? <Movie state={state}></Movie> : null} */}
      {/* =================== */}
      <Movie state={state}></Movie>

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
  );
};

export default MovieDetails;
