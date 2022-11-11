import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';
const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
export const SharedLayout = () => {
  return (
    <section>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movie">Movie</StyledLink>
      </nav>
      <Outlet />
    </section>
  );
};
