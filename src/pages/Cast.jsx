import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CastList from 'components/CastList/CastList';

const Cast = () => {
  const [state, setState] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchMovieCredits() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US`,
        { signal: abortController.signal }
      );

      const normalizeMovieCredits = response.data.cast.map(
        ({ profile_path, name, id }) => {
          if (profile_path) {
            return {
              profile_path: `https://image.tmdb.org/t/p/w138_and_h175_face${profile_path}`,
              name,
              id,
            };
          } else {
            return {
              profile_path: 'https://via.placeholder.com/138x175',
              name,
              id,
            };
          }
        }
      );

      setState([...normalizeMovieCredits]);
    }

    fetchMovieCredits();
    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <>
      {state && (
        <div>
          <CastList state={state}></CastList>
        </div>
      )}
    </>
  );
};

export default Cast;
