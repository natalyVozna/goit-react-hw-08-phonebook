import { Container, Box, BorderBox } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <Container>
      <Box>
        <BorderBox>
          <Header />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </BorderBox>
      </Box>
    </Container>
  );
};

export default Layout;
