import { CreditsList } from './CastList.styled';

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

export default CastList;
