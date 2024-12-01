import './assets/styles.scss';
import { useState, FormEvent, ChangeEvent, FocusEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, handleAuthErrors, RootState } from '../../store';
import { useLocation } from 'react-router-dom';
import { AuthFormInputProps } from './types';
import { inputFields } from './assets/formData';
import AuthForm from './AuthForm';
import AuthFormInput from './assets/reusable/AuthFormInput';
import { SessionProps } from '../../store/slices/types';

export default function Auth(): JSX.Element {
  const { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const { errors } = useSelector(
    (state: RootState): SessionProps => state.session
  );
  const [formData, setFormData] = useState<{
    [key: string]: undefined | string;
  }>({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleInputSelect = (e: FocusEvent<HTMLInputElement>): void => {
    dispatch(handleAuthErrors({ [e.target.name]: undefined }));
  };

  const handleInputUnselect = (e: FocusEvent<HTMLInputElement>): void => {
    dispatch(handleAuthErrors({ [e.target.name]: 'Required' }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
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
        onSelect={handleInputSelect}
        onBlur={handleInputUnselect}
        errormsg={errors?.[field.name]}
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
