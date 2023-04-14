import { useRef, useEffect, useState } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { fetchMovie } from 'services/Fetch';
import Movie from 'components/Movie/Movie';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const [state, setState] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const { current } = useRef(location.state?.from ?? `/`);

  useEffect(() => {
    const abortController = new AbortController();

    // IIFE
    (async function fetch() {
      try {
        const movie = await fetchMovie(movieId, abortController);

        setState({ ...movie });
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
      {Object.keys(state).length !== 0 ? <Movie state={state}></Movie> : null}

      <ul>
        <li>
          <Link to="cast">CAST</Link>
        </li>
        <li>
          <Link to="reviews">REVIEWS</Link>
        </li>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </ul>
    </div>
  );
};

export default MovieDetails;
