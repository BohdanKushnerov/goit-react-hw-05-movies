import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Progressbar from 'components/Progressbar/Progressbar';
import {
  TrandingList,
  Item,
  Title,
  Img,
  WrapProgressbar,
} from './FilmList.styled';

const FilmList = ({ state }) => {
  console.log(state);

  const location = useLocation();

  function takePathto(filmId) {
    return location.pathname === '/' ? `movies/${filmId}` : `${filmId}`;
  }

  return (
    <TrandingList>
      {state.map(({ id, original_title, vote_average, poster_path, title }) => {
        return (
          <Item key={id}>
            <Link key={id} to={takePathto(id)} state={{ from: location }}>
              <Img src={poster_path} alt={title} />
              <Title>{original_title}</Title>
            </Link>
            <WrapProgressbar>
              <Progressbar
                value={Math.round(vote_average * 10)}
                text={`${Math.round(vote_average * 10)}%`}
              />
            </WrapProgressbar>
          </Item>
        );
      })}
    </TrandingList>
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
};

export default FilmList;
