import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    // Request
    async function fetchTrending() {
      const response = await axios.get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=a89ed47e53c22ac07455246c7a19999d'
      );

      setState([...response.data.results]);

      // return response.data.results;
    }

    fetchTrending();
  }, []);

  return (
    <>
      <div>Tranding today</div>
      <ul>
        {state.map(({ id, original_title }) => {
          // console.log(movie);
          return (
            <li key={id}>
              <Link key={id} to={`movies/${id}`}>
                {original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
