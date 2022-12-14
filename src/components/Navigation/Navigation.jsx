import { LinkStyled, NavBar } from './Navigation.styled';
import { NavLink } from 'react-router-dom';

import React from 'react';
import { useAuth } from 'hooks';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavBar>
      {/* <LinkStyled to="/">Home</LinkStyled> */}
      {isLoggedIn && <LinkStyled to="/contacts">Contacts</LinkStyled>}
    </NavBar>
  );
};

export default Navigation;
