import './assets/styles.scss';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthFormInputProps } from './types';
import { inputFields } from './assets/formData';
import AuthForm from './AuthForm';
import AuthFormInput from './assets/reusable/AuthFormInput';

export default function Auth(): JSX.Element {
  const { pathname } = useLocation();
  const [formData, setFormData] = useState<{
    [key: string]: undefined | string;
  }>({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log('Submitted');
  };

  const renderedInputFields = inputFields.map((field: AuthFormInputProps) => {
    if (field.displayRoute && field.displayRoute !== pathname) {
      return;
    }
    return (
      <AuthFormInput
        key={field.name}
        label={field.placeholder}
        onChange={handleInputChange}
        {...field}
      />
    );
  });

  const userAction = pathname === '/signup' ? 'Sign Up' : 'Login';

  return (
    <AuthForm onSubmit={handleSubmit} action={userAction}>
      {renderedInputFields}
    </AuthForm>
  );
}
