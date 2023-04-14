import { useRef, useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { fetchMovie } from 'services/Fetch';
import Movie from 'components/Movie/Movie';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import {
  ReactLink,
  Item,
  WrapMovieDetails,
  LinkWrap,
  ReactLinkList,
} from './MovieDetails.styled';

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
    <WrapMovieDetails>
      <LinkWrap>
        <ReactLink to={current}>{'\u2190'} Back to products</ReactLink>
      </LinkWrap>
      {Object.keys(state).length !== 0 ? <Movie state={state}></Movie> : null}

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
  );
};

export default MovieDetails;
