import { useEffect, useState } from 'react';
import axios from 'axios';
import FilmList from 'components/FilmList/FilmList';

const Home = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    // Request function
    async function fetchTrending() {
      const response = await axios.get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=a89ed47e53c22ac07455246c7a19999d',
        { signal: abortController.signal }
      );

      console.log(response.data.results);

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
    }

    fetchTrending();
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      <h2>Tranding today</h2>
      <FilmList state={state}></FilmList>
    </div>
  );
};

export default Home;
