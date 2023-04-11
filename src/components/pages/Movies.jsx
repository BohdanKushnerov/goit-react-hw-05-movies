import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const Movies = () => {
  const [state, setState] = useState('');
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const filmName = searchParams.get('search');

  const location = useLocation();

  console.log('filmName', filmName);

  const handleChange = e => {
    const { value } = e.currentTarget;

    setState(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ search: state });
    setSearch(state);
    reset();
  };

  const reset = () => {
    setState('');
  };

  useEffect(() => {
    if (!search && !filmName) {
      return;
    }

    const abortController = new AbortController();

    async function fetchSearchMovie() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=a89ed47e53c22ac07455246c7a19999d&query=${
          search || filmName
        }`,
        { signal: abortController.signal }
      );

      const normalizeData = response.data.results.map(
        ({ id, original_title }) => {
          return {
            id,
            original_title,
          };
        }
      );

      setData([...normalizeData]);
    }

    fetchSearchMovie();

    return () => {
      abortController.abort();
    };
  }, [search, filmName]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" value={state} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>

      <ul>
        {data.map(({ id, original_title }) => {
          return (
            <li key={id}>
              <Link key={id} to={`${id}`} state={{ from: location }}>
                {original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
