import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [state, setState] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovie() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US`
      );

      console.log(response.data);

      const { vote_average, overview, title, poster_path } = response.data;

      setState({
        poster_path: `https://image.tmdb.org/t/p/w500${poster_path}`,
        vote_average,
        overview,
        title,
      });
    }

    fetchMovie();
  }, [movieId]);

  const { vote_average, overview, title, poster_path } = state;

  // w600_and_h900_bestv2

  return (
    <>
      {state && (
        <div>
          <h2>{title}</h2>
          <img src={poster_path} alt={title} />
          <p>User score: {vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
        </div>
      )}
    </>
  );
};
// назва, %, овервю, опис, генрес, драмма.

export default MovieDetails;
