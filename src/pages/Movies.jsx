import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'services/FetchFunctions';
import FilmList from 'components/FilmList/FilmList';
import SearchForm from 'components/SearchForm/SearchForm';
import Loader from 'components/Loader/Loader';
import Status from 'services/Constants';

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [searchParams, setSearchParams] = useSearchParams();

  const filmName = searchParams.get('search');

  const handleSubmit = value => {
    setSearchParams({ search: value });
  };

  useEffect(() => {
    if (!filmName) {
      return;
    }

    const abortController = new AbortController();

    // IIFE
    (async function fetch() {
      setLoading(true);
      setStatus(Status.PENDING);

      try {
        const searchFilms = await fetchSearchMovie(filmName, abortController);

        setData([...searchFilms]);
        setStatus(Status.RESOLVED);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setStatus(Status.REJECTED);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [filmName]);

  return (
    <>
      {status === Status.REJECTED ? (
        <h2>
          An error occurred, we could not upload the data, please try reloading
          the page and try again :)
        </h2>
      ) : (
        <>
          <section>
            <SearchForm onSubmit={handleSubmit}></SearchForm>
          </section>
          <section>
            {loading && <Loader />}
            {status === Status.RESOLVED && <FilmList state={data}></FilmList>}
            {!data.length && status === Status.RESOLVED && (
              <h2>There are no movies that matched your query.</h2>
            )}
          </section>
        </>
      )}
    </>
  );
};

export default Movies;
