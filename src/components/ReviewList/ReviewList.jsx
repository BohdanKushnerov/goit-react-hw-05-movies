const ReviewList = ({ state }) => {
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

export default ReviewList;
