import { Button } from 'components/Button/Button';
import { InputCustom } from 'components/InputCustom/InputCustom';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';
import { FormStyle, LinkSignup, Text } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      logIn({
        email: form.elements.email?.value,
        password: form.elements.password?.value,
      })
    );
    form.reset();
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <InputCustom
        title="Email"
        name="email"
        required={true}
        placeholder="Name"
      />
      <InputCustom
        title="Password"
        required={true}
        name="password"
        type="password"
        placeholder="Password"
      />
      <Button type="submit" styled={{ marginTop: '30px' }}>
        Log In
      </Button>

      <Text>Don't have an account?</Text>
      <LinkSignup to="/register">Sign up</LinkSignup>
    </FormStyle>
  );
};
