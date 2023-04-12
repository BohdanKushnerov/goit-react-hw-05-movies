import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/Fetch';
import ReviewList from 'components/ReviewList/ReviewList';

const Reviews = () => {
  const [state, setState] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    // IIFE
    (async function fetch() {
      try {
        const moviesReviews = await fetchReviews(movieId, abortController);

        setState([...moviesReviews]);
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
      <ReviewList state={state}></ReviewList>
    </section>
  );
};

export default Reviews;
