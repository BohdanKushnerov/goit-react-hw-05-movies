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
  padding: 8px;

  text-align: center;

  &:hover {
    background-color: #e5e8e9;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.14),
      0 2px 1px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
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
