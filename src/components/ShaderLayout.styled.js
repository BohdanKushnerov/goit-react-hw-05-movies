import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 16px;
`;

export const ActiveNavLink = styled(NavLink)`
  font-weight: 700;
  font-size: 26px;
  color: black;

  &.active {
    padding: 3px;
    color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 2px 1px rgba(0, 0, 0, 0.14),
      0 2px 2px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    background-color: #3d3e7a;
    /* background-color: rgba(0, 0, 0, 0.05); */
  }

  :hover {
    color: orangered;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 32px;
`;

export const Header = styled.header`
  padding: 8px;

  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
`;
