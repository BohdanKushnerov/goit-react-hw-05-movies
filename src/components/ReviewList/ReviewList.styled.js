import styled from '@emotion/styled';

export const CommentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  background-color: #e5e8e9;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.14),
    0 2px 1px rgba(0, 0, 0, 0.2);
`;

export const ReviewLink = styled.a`
  display: block;
  width: 50px;
  font-weight: 500;
  color: orangered;
  border-radius: 5px;
  outline: 1px solid orangered;
  text-align: center;
`;
