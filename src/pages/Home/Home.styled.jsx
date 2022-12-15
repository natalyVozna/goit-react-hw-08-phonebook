import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  /* margin-bottom: 30px; */
`;

export const LineStyle = styled.div`
  width: calc(100% + 40px);
  position: absolute;
  height: 70px;
  background-color: white;
  left: -20px;
  bottom: -10px;
  z-index: 1;
`;
export const Title = styled.h1`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  color: var(--title);
  font-weight: 700;
  font-size: 30px;
  line-height: 1.6;
  margin-bottom: 26px;
`;
export const LinkStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  padding: 20px 30px;
  align-self: flex-start;
  border-radius: 20px;
  font-weight: 700;
  margin: 0 auto;
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1;
  position: relative;
  z-index: 1;
  margin-bottom: 30px;
  color: var(--white);
  background: linear-gradient(
    60deg,
    rgba(84, 58, 183, 1) 0%,
    rgb(0, 172, 193) 100%
  );
  box-shadow: 1px 1px 3px 0px rgba(33, 33, 33, 0.7);
  transition: box-shadow 250ms var(--timing-function);

  :hover {
    box-shadow: 1px 2px 6px 1px rgb(33, 33, 33);
  }
`;
