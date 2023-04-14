import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'services/Fetch';
import FilmList from 'components/FilmList/FilmList';
import SearchForm from 'components/SearchForm/SearchForm';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Movies = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [searchParams, setSearchParams] = useSearchParams();

  const filmName = searchParams.get('search');

  const handleSubmit = value => {
    setSearchParams({ search: value });
    setSearch(value);
  };

  useEffect(() => {
    if (!search && !filmName) {
      return;
    }

    const abortController = new AbortController();

    // IIFE
    (async function fetch() {
      setStatus(Status.PENDING);

      try {
        const searchFilms = await fetchSearchMovie(
          search || filmName,
          abortController
        );

        setData([...searchFilms]);
        setStatus(Status.RESOLVED);
      } catch (error) {
        console.log(error);
        setStatus(Status.REJECTED);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [search, filmName]);

  console.log('data', data);

  return (
    <>
      <section>
        <SearchForm onSubmit={handleSubmit}></SearchForm>
      </section>
      <section>
        {status === Status.RESOLVED && <FilmList state={data}></FilmList>}
        {!data.length && status === Status.RESOLVED && (
          <h2>There are no movies that matched your query.</h2>
        )}
      </section>
    </>
  );
};

export default Movies;
