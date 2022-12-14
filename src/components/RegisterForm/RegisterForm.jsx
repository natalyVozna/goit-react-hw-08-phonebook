import { Button } from 'components/Button/Button';
import { InputCustom } from 'components/InputCustom/InputCustom';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operation';
import { Form } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.elements.name.value);
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <InputCustom
        title="Username"
        name="name"
        required={true}
        placeholder="Username"
      />
      <InputCustom
        title="Email"
        type="email"
        name="email"
        required={true}
        placeholder="Email"
      />
      <InputCustom
        title="Password"
        type="password"
        name="password"
        required={true}
        placeholder="Password"
      />

      <Button type="submit" styled={{ marginTop: '30px' }}>
        Register
      </Button>
    </Form>
  );
};
