import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReviewList from 'components/ReviewList/ReviewList';

const Reviews = () => {
  const [state, setState] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchReviews() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US&page=1`,
        { signal: abortController.signal }
      );

      console.log(response.data.results);

      const normalizedReview = response.data.results.map(
        ({ author, content, id, url }) => {
          return {
            author,
            content,
            id,
            url,
          };
        }
      );

      console.log(normalizedReview);

      setState([...normalizedReview]);
    }

    fetchReviews();
    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <div>
      <ReviewList state={state}></ReviewList>
    </div>
  );
};

export default Reviews;
