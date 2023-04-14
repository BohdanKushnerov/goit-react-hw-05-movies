import styled from '@emotion/styled';

export const TrandingList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

export const Item = styled.li`
  position: relative;

  max-width: 220px;

  text-align: center;
`;

export const Title = styled.h2`
  color: black;
`;

export const Img = styled.img`
  margin-bottom: 20px;
`;

export const WrapProgressbar = styled.div`
  position: absolute;
  top: 303px;
  left: 5px;

  width: 47px;
`;
