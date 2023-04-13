import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/Fetch';
import CastList from 'components/CastList/CastList';

const Cast = () => {
  const [state, setState] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    // IIFE
    (async function fetch() {
      try {
        const moviesCredits = await fetchMovieCredits(movieId, abortController);

        setState([...moviesCredits]);
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <section>
      {state.length ? (
        <CastList state={state}></CastList>
      ) : (
        <h2>We don't have any cast added to this movie</h2>
      )}
    </section>
  );
};

export default Cast;
