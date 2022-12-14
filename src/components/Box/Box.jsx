// import { Children } from 'react';
import { Container, Content, SubTitle, Title } from './Box.styled';
export const Box = ({ children, title, styled }) => {
  return (
    <>
      <Title>Phonebook</Title>

      <Content style={styled}>
        <SubTitle>{title}</SubTitle>
        {children}
      </Content>
    </>
  );
};
