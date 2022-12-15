import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 60px;
  color: var(--title);
  background-color: #94dbe4;
`;

export const Box = styled.section`
  display: flex;
  min-width: 400px;
  width: 400px;
  height: 700px;
  margin: 0 auto;
`;

export const BorderBox = styled.div`
  border-radius: 30px;
  display: flex;
  color: var(--white);
  flex-direction: column;
  background: linear-gradient(
    60deg,
    rgba(84, 58, 183, 1) 0%,
    rgb(0, 172, 193) 100%
  );
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
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
