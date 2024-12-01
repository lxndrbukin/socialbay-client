import { AuthFormInputProps } from '../../types';

export default function AuthFormInput({
  name,
  placeholder,
  label,
  errormsg,
  ...props
}: AuthFormInputProps): JSX.Element {
  return (
    <div className="auth_form_input">
      <input
        {...props}
        name={name}
        // placeholder={placeholder}
        className={`input ${errormsg ? 'error' : ''}`}
      />
      <label className={`input_label ${errormsg ? 'error' : ''}`}>
        {label}
      </label>
      <span className="auth_error">{errormsg}</span>
    </div>
  );
}
