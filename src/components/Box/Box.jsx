import { Content, SubTitle, Title } from './Box.styled';
export const Box = ({ children, title, styled }) => {
  return (
    <Content style={styled}>
      {/* <Title>Phonebook</Title> */}
      <SubTitle>{title}</SubTitle>
      {children}
    </Content>
  );
};
