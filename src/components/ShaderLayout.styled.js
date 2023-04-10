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
  color: red;

  &.active {
    color: black;
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
