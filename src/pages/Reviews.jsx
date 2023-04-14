import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/FetchFunctions';
import ReviewList from 'components/ReviewList/ReviewList';
import Status from 'services/Constants';

const Reviews = () => {
  const [state, setState] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    // IIFE
    (async function fetch() {
      setStatus(Status.PENDING);
      try {
        const moviesReviews = await fetchReviews(movieId, abortController);

        setState([...moviesReviews]);
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
      {status === Status.RESOLVED && <ReviewList state={state}></ReviewList>}
      {!state.length && status === Status.RESOLVED && (
        <h2>We don't have any reviews for this film</h2>
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

export default Reviews;
