import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../images/search-left.svg';

export const Field = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
export const LabelInput = styled.label`
  margin-bottom: 2px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  color: var(--text);
`;
export const SearchLabel = styled(SearchIcon)`
  position: absolute;
  top: 9px;
  left: 9px;
  width: 22px;
  height: 24px;

  fill: ${p => (p.disabled ? '#afb1b8' : '#2c2c2c')};
`;

export const InputStyled = styled.input`
  cursor: pointer;
  margin: 0;
  padding: 6px 12px;
  font: inherit;
  background: #ffffff;
  border: 1px solid rgba(0, 172, 193, 0.12);
  box-shadow: 0px 1px 2px rgba(0, 172, 193, 0.15);
  border-radius: 20px;
  height: 40px;
  width: 100%;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;

  transition: border 250ms var(--timing-function);

  &::placeholder {
    color: var(--dark-gray);
  }

  &:focus:invalid {
    border: 1px solid var(--red);
  }
  :valid {
    border: 1px solid rgba(84, 58, 183, 0.5);
  }
`;
