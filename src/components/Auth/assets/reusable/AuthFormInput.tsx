import { AuthFormInputProps } from '../../types';

export default function AuthFormInput({
  children,
  name,
  placeholder,
  label,
  errormsg,
  filled,
  ...props
}: AuthFormInputProps): JSX.Element {
  return (
    <div className="auth_form_input">
      <input
        {...props}
        name={name}
        className={`input ${filled ? 'filled' : ''}`}
      />
      <label className={`input_label ${errormsg ? 'error' : ''}`}>
        {label}
      </label>
      {children}
    </div>
  );
}
