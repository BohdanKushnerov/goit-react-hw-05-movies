import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/FetchFunctions';
import FilmList from 'components/FilmList/FilmList';
import Status from 'services/Constants';
import { Section } from './Home.styled';

const Home = () => {
  const [state, setState] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    const abortController = new AbortController();

    // IIFE
    (async function fetchFilms() {
      setStatus(Status.PENDING);
      try {
        const trandFilms = await fetchTrending(abortController);

        setState([...trandFilms]);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
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
      {status === Status.REJECTED && (
        <h2>
          An error occurred, we could not upload the data, please try reloading
          the page and try again :)
        </h2>
      )}
    </Section>
  );
};

export default Home;
