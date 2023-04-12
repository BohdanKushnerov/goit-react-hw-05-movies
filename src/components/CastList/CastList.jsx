import { CreditsList } from './CastList.styled';
import PropTypes from 'prop-types';

const CastList = ({ state }) => {
  return (
    <CreditsList>
      {state.map(({ profile_path, name, id }) => {
        return (
          <li key={id}>
            <img src={profile_path} alt={name} />
            <p>{name}</p>
          </li>
        );
      })}
    </CreditsList>
  );
};

CastList.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({
      profile_path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default CastList;
