import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const Input = styled.input`
  width: 500px;
  padding: 15px 16px;

  box-sizing: border-box;
  border-radius: 5px;
  background-color: #dcdfe2;
  border: 1px solid #ffffff;
  font-size: 18px;

  :focus {
    outline: transparent;
    border: 1px solid #000000;
    background-color: #dcdfe2;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.14),
      0 2px 1px rgba(0, 0, 0, 0.2);
  }
  :-webkit-autofill {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
`;
export const Button = styled.button`
  padding: 10px 24px;
  min-width: 100px;

  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  color: black;
  background-color: #74858f;
  cursor: pointer;

  :disabled {
    opacity: 0.4;
  }

  :hover {
    color: orangered;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.14),
      0 2px 1px rgba(0, 0, 0, 0.2);
  }
`;
