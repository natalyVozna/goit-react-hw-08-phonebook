import styled from 'styled-components';
import { ReactComponent as Plus } from '../../images/plus.svg';

export const Content = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 38px 38px 0 0;
  bottom: 0;
  left: 0;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0px 0px 9px 0px rgb(33 33 33 / 55%);
  /* background-size: cover; */
`;

export const ContactsBox = styled.div`
  height: 100%;
  overflow-y: auto;
  padding-top: 20px;
`;
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 30px;
  color: var(--white);
  font-weight: 700;
  font-size: 30px;
  line-height: 1.6;
  margin-bottom: 26px;
`;
export const SubTitle = styled.h2`
  display: flex;
  justify-content: center;
  width: 100%;
  color: var(--title);
  font-weight: 700;
  font-size: 28px;
  line-height: 1.6;
  margin-bottom: 24px;
`;

export const PlusStyle = styled(Plus)`
  width: 20px;
  height: 20px;
  fill: var(--title);
`;
export const Minus = styled.span`
  border-bottom: 2px solid var(--title);
  width: 20px;
`;

export const AddButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(-50%);
  border: none;
  background-color: var(--white);
  box-shadow: 1px 1px 6px rgb(33 33 33 / 30%);
  width: 40px;
  min-width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--title);
  font-size: 40px;

  &:hover {
    box-shadow: 1px 1px 8px 2px rgb(33 33 33 / 30%);
    color: var(--blue);

    svg {
      fill: var(--blue);
    }
    span {
      border-bottom: 2px solid var(--blue);
    }
  }
`;
