import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'services/Fetch';
import FilmList from 'components/FilmList/FilmList';
import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
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
      setLoading(true);

      try {
        const searchFilms = await fetchSearchMovie(
          search || filmName,
          abortController
        );

        setData([...searchFilms]);
        setLoading(false);
      } catch (error) {
        console.log(error);
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
        {/* <FilmList state={data} loading={loading}></FilmList> */}
        {data.length ? (
          <FilmList state={data} loading={loading}></FilmList>
        ) : (
          <h2>There are no movies that matched your query.</h2>
        )}
      </section>
    </>
  );
};

export default Movies;
