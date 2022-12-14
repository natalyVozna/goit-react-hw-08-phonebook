import { LinkStyled, NavBar } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <NavBar>
      <LinkStyled to="/register">Register</LinkStyled>
      <LinkStyled to="/login">Log In</LinkStyled>
    </NavBar>
  );
};
