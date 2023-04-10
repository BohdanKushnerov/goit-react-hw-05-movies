import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import Cast from './pages/Cast';
import Reviews from './pages/Reviews';
import styled from '@emotion/styled';
import { Container } from './App.styled';

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

const ActiveNavLink = styled(NavLink)`
  color: red;

  &.active {
    color: green;
  }
`;

export const App = () => {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <ActiveNavLink to="/">Home</ActiveNavLink>
          </li>
          <li>
            <ActiveNavLink to="movies">Movies</ActiveNavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        {/* <Route path="/movies/:movieId/reviews" element={<Reviews />}></Route> */}
      </Routes>
    </Container>
  );
};
