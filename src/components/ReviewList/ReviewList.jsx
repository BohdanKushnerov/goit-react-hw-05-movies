import PropTypes from 'prop-types';
import { CommentList, ReviewItem, ReviewLink } from './ReviewList.styled';

const ReviewList = ({ state }) => {
  console.log(state);

  return (
    <CommentList>
      {state.map(({ author, content, id, url }) => {
        return (
          <ReviewItem key={id}>
            <h2>Author: {author}</h2>
            <p>{content}</p>
            <ReviewLink href={url} target="_blank">
              Link
            </ReviewLink>
          </ReviewItem>
        );
      })}
    </CommentList>
  );
};

ReviewList.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ReviewList;
