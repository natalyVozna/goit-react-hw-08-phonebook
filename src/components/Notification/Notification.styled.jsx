import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  padding: 20px;
  /* border-radius: 38px 38px 0 0; */
  bottom: 0;
  left: 0;
  background-color: var(--white);
  background-size: 120%;
  background-repeat: no-repeat;
  background-position: bottom;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* box-shadow: 0px 0px 9px 0px rgb(33 33 33 / 55%); */
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* padding: 20px; */
  color: var(--title);
  font-weight: 500;
  font-size: 33px;
  line-height: 1.6;
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
