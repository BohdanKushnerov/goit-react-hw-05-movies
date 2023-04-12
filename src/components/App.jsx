import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import Cast from '../pages/Cast';
import Reviews from '../pages/Reviews';
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
// 2. CANVAS + make new component
// 3. add default values for useSearchParams - update when delete values
// 4. add any reviews []
// 5. add any films []
// 8. loader when make "lazy components"
// 9. page 404
// 10. 0% icon red color
// 12. reducer {}

// 1. Try find new canvas
// 2. Sceleton
// https://skeletonreact.com/
// https://github.com/danilowoz/react-content-loader#gettingstarted

// 3. finnaly
