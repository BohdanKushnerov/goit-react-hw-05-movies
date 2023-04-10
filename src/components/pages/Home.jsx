import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // const reducer = (state, action) => {
  //   console.log(action);
  //   switch (action.type) {
  //     case 'fetchTrending':
  //       return [...state, ...action.payload];
  //     default:
  //       break;
  //   }
  // };

  const [state, setState] = useState([]);
  // const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const abortController = new AbortController();

    // Request function
    async function fetchTrending() {
      const response = await axios.get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=a89ed47e53c22ac07455246c7a19999d',
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

      // console.log('normalizeData', normalizeData);

      setState([...normalizeData]);
      // dispatch({ type: 'fetchTrending', payload: response.data.results });
    }

    fetchTrending();
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      <h2>Tranding today</h2>
      <ul>
        {state.map(({ id, original_title }) => {
          return (
            <li key={id}>
              <Link key={id} to={`movies/${id}`}>
                {original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
