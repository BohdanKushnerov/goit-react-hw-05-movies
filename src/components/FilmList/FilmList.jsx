import { Link, useLocation } from 'react-router-dom';
import { TrandingList, Item, Title } from './FilmList.styled';
import Progressbar from './FilmList.styled';
import Loader from 'components/Loader/Loader';

const FilmList = ({ state, loading }) => {
  console.log(loading);
  const location = useLocation();

  console.log(location.pathname);

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

export default FilmList;
