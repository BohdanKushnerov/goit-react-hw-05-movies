import { useEffect, useState } from 'react';
import axios from 'axios';
import FilmList from 'components/FilmList/FilmList';

const Home = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log(loading);

  useEffect(() => {
    const abortController = new AbortController();

    // Request function

    async function fetchTrending() {
      setLoading(true);

      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/day?api_key=a89ed47e53c22ac07455246c7a19999d',
          { signal: abortController.signal }
        );

        const normalizeData = response.data.results.map(
          ({ id, original_title, vote_average, poster_path, title }) => {
            return {
              id,
              original_title,
              vote_average,
              poster_path: `https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`,
              title,
            };
          }
        );

        setState([...normalizeData]);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchTrending();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      <h2>Tranding today</h2>
      <FilmList state={state} loading={loading}></FilmList>
    </div>
  );
};

export default Home;
