import { LinkStyled, NavBar } from './AuthNav.styled';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <NavBar>
      <LinkStyled to="/register">Register</LinkStyled>
      <LinkStyled to="/login">Log In</LinkStyled>
    </NavBar>
  );
};
