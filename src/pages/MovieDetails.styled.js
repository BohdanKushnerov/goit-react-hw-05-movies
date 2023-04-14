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
`;

export const LinkWrap = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;

  width: 150px;
  /* height: 30px; */
  background-color: rgb(8, 28, 34);
  border-radius: 5px;
`;

export const Item = styled.li`
  width: 100px;
  height: 40px;

  background-color: rgb(8, 28, 34);
  border-radius: 20px;
  text-align: center;
  line-height: 40px;
`;

export const ReactLinkList = styled.ul`
  display: flex;
  gap: 8px;
`;
