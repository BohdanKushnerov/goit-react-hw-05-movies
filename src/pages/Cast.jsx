import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/Fetch';
import CastList from 'components/CastList/CastList';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Cast = () => {
  const [state, setState] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    // IIFE
    (async function fetch() {
      setStatus(Status.PENDING);
      try {
        const moviesCredits = await fetchMovieCredits(movieId, abortController);

        setState([...moviesCredits]);
        setStatus(Status.RESOLVED);
      } catch (error) {
        console.log(error);
        setStatus(Status.REJECTED);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <section>
      {status === Status.RESOLVED && <CastList state={state}></CastList>}
      {!state.length && status === Status.RESOLVED && (
        <h2>We don't have any cast added to this movie</h2>
      )}
    </section>
  );
};

export default Cast;