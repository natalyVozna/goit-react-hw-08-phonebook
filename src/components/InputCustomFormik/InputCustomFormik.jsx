import {
  LabelInput,
  InputStyled,
  SearchLabel,
  FieldStyle,
  ErrorText,
} from './InputCustomFormik.styled';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    ></ErrorMessage>
  );
};

export const InputCustomFormik = ({
  inputId,
  type = 'text',
  title,
  name,
  value,
  icon: Icon,
  fildStyle,
  inputStyle,
  required = true,
  pattern,
  handleChangeInput,
  placeholder,
  disabled = false,
}) => {
  return (
    <FieldStyle style={fildStyle}>
      {title && <LabelInput htmlFor={inputId}>{title}</LabelInput>}
      {Icon && <SearchLabel disabled={disabled} />}
      <InputStyled
        type={type}
        name={name}
        id={inputId}
        value={value}
        style={inputStyle}
        onChange={handleChangeInput}
        placeholder={placeholder}
        pattern={pattern}
        required={required}
        disabled={disabled}
      />
      <FormError name={name} />
    </FieldStyle>
  );
};

InputCustomFormik.propTypes = {
  inputId: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  fildStyle: PropTypes.shape({}),
  title: PropTypes.string,
  inputStyle: PropTypes.shape({}),
  handleChangeInput: PropTypes.func,
};
