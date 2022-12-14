import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormStyle = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const Text = styled.p`
  color: var(--title);
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  margin-top: 40px;
`;
export const LinkSignup = styled(Link)`
  color: var(--title);
  font-size: 18px;
  line-height: 1.5;
  text-decoration: none;
  font-weight: 600;
  transition: transform 250ms var(--timing-function);

  :hover:not(.active),
  :focus-visible:not(.active) {
    transform: scale(1.05);
  }
`;
