import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/Fetch';
import CastList from 'components/CastList/CastList';
import Status from 'services/Constants';

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
        setStatus(Status.REJECTED);
        console.log(error);
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
      {status === Status.REJECTED && (
        <h2>
          An error occurred, we could not upload the data, please try reloading
          the page and try again :)
        </h2>
      )}
    </section>
  );
};

export default Cast;
