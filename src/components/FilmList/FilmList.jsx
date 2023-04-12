import { Link, useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { TrandingList, Item, Title } from './FilmList.styled';
import Progressbar from './FilmList.styled';
import PropTypes from 'prop-types';

const FilmList = ({ state, loading }) => {
  const location = useLocation();

  function takePathto(filmId) {
    return location.pathname === '/' ? `movies/${filmId}` : `${filmId}`;
  }

  return (
    <>
      {loading && <Loader />}
      <TrandingList>
        {state.map(
          ({ id, original_title, vote_average, poster_path, title }) => {
            return (
              <Item key={id}>
                <Link key={id} to={takePathto(id)} state={{ from: location }}>
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
    </>
  );
};

FilmList.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default FilmList;
