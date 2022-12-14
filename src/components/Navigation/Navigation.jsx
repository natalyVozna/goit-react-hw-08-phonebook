import { LinkStyled, NavBar } from './Navigation.styled';

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
