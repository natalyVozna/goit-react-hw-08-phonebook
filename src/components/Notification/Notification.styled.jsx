import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  padding: 20px;
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
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
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
