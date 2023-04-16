import PropTypes from 'prop-types';
import { CreditsList, CreditsItem, Name } from './CastList.styled';

const CastList = ({ state }) => {
  return (
    <CreditsList>
      {state.map(({ profile_path, name, id }) => {
        return (
          <CreditsItem key={id}>
            <img src={profile_path} alt={name} width={138} height={175} />
            <Name>{name}</Name>
          </CreditsItem>
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
