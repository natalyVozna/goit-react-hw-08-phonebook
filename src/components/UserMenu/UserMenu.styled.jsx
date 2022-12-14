import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const User = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
export const LogoutBtn = styled.button`
  display: flex;
  justify-content: flex-end;
  color: #274fe7;
  background-color: transparent;
  font-size: 16px;
  line-height: 1.1;
  text-decoration: none;
  font-weight: 600;
  transition: color 250ms var(--timing-function),
    background-color 250ms var(--timing-function);

  &.active {
    color: var(--violet);
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: var(--violet);
  }
`;
