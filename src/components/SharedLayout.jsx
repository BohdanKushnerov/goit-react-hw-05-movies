import { Outlet } from 'react-router-dom';
import {
  Container,
  ActiveNavLink,
  NavList,
  Header,
} from './ShaderLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <NavList>
            <li>
              <ActiveNavLink to="/">Home</ActiveNavLink>
            </li>
            <li>
              <ActiveNavLink to="/movies">Movies</ActiveNavLink>
            </li>
          </NavList>
        </nav>
      </Header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default SharedLayout;
