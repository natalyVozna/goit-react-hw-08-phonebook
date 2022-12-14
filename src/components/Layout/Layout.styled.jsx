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
