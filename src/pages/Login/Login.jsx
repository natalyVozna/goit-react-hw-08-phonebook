// import {} from './Login.styled';
import { Helmet } from 'react-helmet';

import React from 'react';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Box } from 'components/Box/Box';

const Login = () => {
  return (
    <Box title="Welcom back">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Box>
  );
};

export default Login;
