import { useRef, useEffect, useState, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { fetchMovie } from 'services/Fetch';
import Movie from 'components/Movie/Movie';
import Loader from 'components/Loader/Loader';
import Status from 'services/Constants';

import {
  ReactLink,
  Item,
  WrapMovieDetails,
  LinkWrap,
  ReactLinkList,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [state, setState] = useState({});
  const [status, setStatus] = useState(Status.IDLE);
  const { movieId } = useParams();
  const location = useLocation();
  const { current } = useRef(location.state?.from ?? `/`);

  useEffect(() => {
    const abortController = new AbortController();

    // IIFE
    (async function fetch() {
      setStatus(Status.PENDING);
      try {
        const movie = await fetchMovie(movieId, abortController);

        setState({ ...movie });
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);

        console.log(error);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <>
      {status === Status.RESOLVED && (
        <WrapMovieDetails>
          <LinkWrap>
            <ReactLink to={current}>{'\u2190'} Back to products</ReactLink>
          </LinkWrap>
          {Object.keys(state).length !== 0 ? (
            <Movie state={state}></Movie>
          ) : null}

          <ReactLinkList>
            <Item>
              <ReactLink to="cast">CAST</ReactLink>
            </Item>
            <Item>
              <ReactLink to="reviews">REVIEWS</ReactLink>
            </Item>
          </ReactLinkList>

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </WrapMovieDetails>
      )}
      {status === Status.REJECTED && (
        <h2>
          An error occurred, we could not upload the data, please try reloading
          the page and try again :)
        </h2>
      )}
    </>
  );
};

export default MovieDetails;
