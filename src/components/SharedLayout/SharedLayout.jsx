import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Section, Nav } from './SharedLayout.styled';
const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  :not(:last-child) {
    margin-right: 10px;
  }
  &.active {
    color: orange;
  }
`;
const SharedLayout = () => {
  return (
    <Section>
      <Nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="movies">Movie</StyledLink>
      </Nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Section>
  );
};
export default SharedLayout;
