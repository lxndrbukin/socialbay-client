import './assets/styles.scss';
import { useLocation } from 'react-router-dom';
import { AuthFormInputProps } from './types';
import { inputFields } from './assets/formData';
import AuthForm from './AuthForm';
import AuthFormInput from './assets/reusable/AuthFormInput';

export default function Auth(): JSX.Element {
  const { pathname } = useLocation();

  const renderedInputFields = inputFields.map((field: AuthFormInputProps) => {
    if (field.displayRoute && field.displayRoute !== pathname) {
      return;
    }
    return (
      <AuthFormInput key={field.name} label={field.placeholder} {...field} />
    );
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log('Submitted');
  };

  const buttonText = pathname === '/signup' ? 'Sign Up' : 'Login';

  return (
    <AuthForm onSubmit={onSubmit} buttonText={buttonText}>
      {renderedInputFields}
    </AuthForm>
  );
}
