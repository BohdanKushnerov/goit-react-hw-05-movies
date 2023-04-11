import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TrandingList, Item, Title } from './Home.styled';
import Progressbar from './Home.styled';

const Home = () => {
  const [state, setState] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const abortController = new AbortController();

    // Request function
    async function fetchTrending() {
      const response = await axios.get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=a89ed47e53c22ac07455246c7a19999d',
        { signal: abortController.signal }
      );

      console.log(response.data.results);

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

      setState([...normalizeData]);
    }

    fetchTrending();
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      <h2>Tranding today</h2>
      <TrandingList>
        {state.map(
          ({ id, original_title, vote_average, poster_path, title }) => {
            return (
              <Item key={id}>
                <Link key={id} to={`movies/${id}`} state={{ from: location }}>
                  <img src={poster_path} alt={title} />
                  <Title>{original_title}</Title>
                </Link>

                <Progressbar
                  value={Math.round(vote_average * 10)}
                  text={`${Math.round(vote_average * 10)}%`}
                />
              </Item>
            );
          }
        )}
      </TrandingList>
    </div>
  );
};

export default Home;
