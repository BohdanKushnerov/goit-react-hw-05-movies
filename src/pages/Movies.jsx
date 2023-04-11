import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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

    async function fetchSearchMovie() {
      setLoading(true);

      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=a89ed47e53c22ac07455246c7a19999d&query=${
            search || filmName
          }`,
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

        setData([...normalizeData]);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchSearchMovie();

    return () => {
      abortController.abort();
    };
  }, [search, filmName]);

  return (
    <div>
      <SearchForm onSubmit={handleSubmit}></SearchForm>
      <FilmList state={data} loading={loading}></FilmList>
    </div>
  );
};

export default Movies;
