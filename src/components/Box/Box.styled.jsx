import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 38px 38px 0 0;
  bottom: 0;
  left: 0;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0px 0px 9px 0px rgb(33 33 33 / 55%);
`;

export const Content = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 38px 38px 0 0;
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
  box-shadow: 0px 0px 9px 0px rgb(33 33 33 / 55%);
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
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
