import { Outlet } from 'react-router-dom';
import {
  Container,
  ActiveNavLink,
  NavList,
  Header,
} from './ShaderLayout.styled';
import { Suspense } from 'react';
import Loader from './Loader/Loader';

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
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default SharedLayout;
