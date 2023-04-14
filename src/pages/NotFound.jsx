import { ReactLink, LinkWrap } from './MovieDetails.styled';

const NotFound = () => {
  return (
    <>
      <h2>Sorry, page not found</h2>
      <LinkWrap>
        <ReactLink to={`/`}>{'\u2190'} Back to products</ReactLink>
      </LinkWrap>
    </>
  );
};

export default NotFound;
