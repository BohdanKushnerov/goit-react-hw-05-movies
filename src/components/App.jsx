import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import Cast from './pages/Cast';
import Reviews from './pages/Reviews';
import SharedLayout from './SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

// 1. Loading on pages
// 2. PropTypes for CANVAS + make new component

// 3. Try find new canvas
// 4. Try make

//================================
//Trending
// https://api.themoviedb.org/3/trending/movie/day?api_key=a89ed47e53c22ac07455246c7a19999d
//================================
// Search
// https://api.themoviedb.org/3/search/movie?api_key=a89ed47e53c22ac07455246c7a19999d&query=Jack+Reacher
//================================
// /movies/get-movie-details
// https://api.themoviedb.org/3/movie/594767?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US
// 594767-id
//================================
// /movies/get-movie-credits
// https://api.themoviedb.org/3/movie/594767/credits?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US

// 594767-id
//================================
// /movies/get-movie-reviews
// https://api.themoviedb.org/3/movie/594767/reviews?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US&page=1

// 594767-id & page=1
//================================
