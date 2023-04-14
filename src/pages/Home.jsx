import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/Fetch';
import FilmList from 'components/FilmList/FilmList';
import { Section } from './Home.styled';

const Home = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    // IIFE
    (async function fetchFilms() {
      try {
        const trandFilms = await fetchTrending(abortController);

        setState([...trandFilms]);
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <Section>
      <h2>Tranding today</h2>
      {state.length !== 0 && <FilmList state={state}></FilmList>}
    </Section>
  );
};

export default Home;
