import { Container, Box, BorderBox, Title, Content } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <Container>
      <Box>
        <BorderBox>
          <Header />
          <Title>Phonebook</Title>
          <Content>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </Content>
        </BorderBox>
      </Box>
    </Container>
  );
};

export default Layout;
