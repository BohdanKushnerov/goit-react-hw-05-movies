import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/Fetch';
import FilmList from 'components/FilmList/FilmList';

const Home = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    // IIFE
    (async function fetchFilms() {
      setLoading(true);

      try {
        const trandFilms = await fetchTrending(abortController);

        setState([...trandFilms]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <section>
      <h2>Tranding today</h2>
      <FilmList state={state} loading={loading}></FilmList>
    </section>
  );
};

export default Home;
