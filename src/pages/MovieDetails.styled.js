import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const WrapMovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ReactLink = styled(Link)`
  width: 100%;
  height: 100%;

  font-weight: 700;
  color: white;
  text-align: center;

  :hover {
    color: orangered;
  }
`;

export const LinkWrap = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;

  width: 150px;

  background-color: rgb(8, 28, 34);
  border-radius: 5px;

  :hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.14),
      0 2px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const Item = styled.li`
  width: 100px;
  height: 40px;

  background-color: rgb(8, 28, 34);
  border-radius: 20px;
  text-align: center;
  line-height: 40px;

  :hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.14),
      0 2px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const ReactLinkList = styled.ul`
  display: flex;
  gap: 8px;
`;
