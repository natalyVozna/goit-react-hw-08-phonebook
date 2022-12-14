import { Button } from 'components/Button/Button';
import { InputCustom } from 'components/InputCustom/InputCustom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { logIn } from 'redux/auth/operation';
import { Form } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    console.log('eve', e);
    e.preventDefault();
    // const form = e.currentTarget;
    const form = e.target;
    console.log('login', form.elements.email?.value);
    dispatch(
      logIn({
        email: form.elements.email?.value,
        password: form.elements.password?.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
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
    </Form>
  );
};

// LoginForm.propTypes = {
//   onSubmitHandle: PropTypes.func.isRequired,
// };
