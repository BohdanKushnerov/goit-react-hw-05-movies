import styled from '@emotion/styled';

export const CreditsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

export const CreditsItem = styled.li`
  max-width: 138px;

  background-color: #e5e8e9;
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.14),
    0 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Name = styled.p`
  font-weight: 500;
`;
