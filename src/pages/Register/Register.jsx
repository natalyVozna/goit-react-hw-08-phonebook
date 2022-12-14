import {} from './Register.styled';
import { Helmet } from 'react-helmet';

import React from 'react';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Box } from 'components/Box/Box';

const Register = () => {
  return (
    <Box title="Register">
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </Box>
  );
};

export default Register;
