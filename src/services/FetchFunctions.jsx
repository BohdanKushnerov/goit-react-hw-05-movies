import axios from 'axios';

async function fetchTrending(abortController) {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=a89ed47e53c22ac07455246c7a19999d',
    { signal: abortController.signal }
  );

  return response.data.results.map(
    ({ id, original_title, vote_average, poster_path, title }) => {
      return {
        id,
        original_title,
        vote_average,
        poster_path: poster_path
          ? `https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`
          : 'https://via.placeholder.com/220x330',
        title,
      };
    }
  );
}

async function fetchSearchMovie(filmName, abortController) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=a89ed47e53c22ac07455246c7a19999d&query=${filmName}`,
    { signal: abortController.signal }
  );

  return response.data.results.map(
    ({ id, original_title, vote_average, poster_path, title }) => {
      return {
        id,
        original_title,
        vote_average,
        poster_path: poster_path
          ? `https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`
          : 'https://via.placeholder.com/220x330',
        title,
      };
    }
  );
}

async function fetchMovieCredits(movieId, abortController) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US`,
    { signal: abortController.signal }
  );

  return response.data.cast.map(({ profile_path, name, id }) => {
    return {
      profile_path: profile_path
        ? `https://image.tmdb.org/t/p/w138_and_h175_face${profile_path}`
        : 'https://via.placeholder.com/138x175',
      name,
      id,
    };
  });
}

async function fetchReviews(movieId, abortController) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US&page=1`,
    { signal: abortController.signal }
  );

  return response.data.results.map(({ author, content, id, url }) => {
    return {
      author,
      content,
      id,
      url,
    };
  });
}

async function fetchMovie(movieId, abortController) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US`,
    { signal: abortController.signal }
  );

  const { vote_average, overview, title, genres, poster_path } = response.data;

  return {
    vote_average,
    overview,
    title,
    genres: stringFromGanresArray(genres),
    poster_path: poster_path
      ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`
      : 'https://via.placeholder.com/300x450',
  };

  function stringFromGanresArray(array) {
    const string = array.reduce((acc, value) => {
      return (acc += value.name);
    }, '');

    return string.split(/(?=[A-Z])/).join(', ');
  }
}

export {
  fetchTrending,
  fetchMovie,
  fetchSearchMovie,
  fetchMovieCredits,
  fetchReviews,
};
