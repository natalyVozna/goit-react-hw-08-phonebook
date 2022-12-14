import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.nav`
  display: flex;
  gap: 12px;
`;
export const LinkStyled = styled(NavLink)`
  height: 30px;
  color: var(--white);
  font-size: 20px;
  line-height: 1.1;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  font-weight: 600;
  transition: color 250ms var(--timing-function),
    border 250ms var(--timing-function);

  &.active {
    color: var(--white);
    border-bottom: 2px solid var(--white);
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: var(--blue);
    border: none;
    /* transform: scale(1.04); */
  }
`;
