import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.nav`
  display: flex;
  gap: 12px;
`;
export const LinkStyled = styled(NavLink)`
  color: var(--white);
  font-size: 20px;
  line-height: 1.3;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 2px solid transparent;
  transition: border 250ms var(--timing-function);

  &.active {
    color: var(--violet);
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    border-bottom: 2px solid var(--white);
  }
`;
