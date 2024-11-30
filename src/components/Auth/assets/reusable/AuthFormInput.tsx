import { AuthFormInputProps } from '../../types';

export default function AuthFormInput({
  name,
  placeholder,
  label,
  ...props
}: AuthFormInputProps): JSX.Element {
  return (
    <div className="auth_form_input">
      <label>{label}</label>
      <input {...props} name={name} placeholder={placeholder} />
    </div>
  );
}
