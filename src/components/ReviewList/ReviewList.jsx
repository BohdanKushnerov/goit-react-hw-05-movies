import PropTypes from 'prop-types';

const ReviewList = ({ state }) => {
  console.log(state);

  return (
    <ul>
      {state.map(({ author, content, id, url }) => {
        return (
          <li key={id}>
            <h2>Author: {author}</h2>
            <p>{content}</p>
            <a href={url}>Link</a>
          </li>
        );
      })}
    </ul>
  );
};

ReviewList.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ReviewList;
