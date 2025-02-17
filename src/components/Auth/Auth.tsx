import './assets/styles.scss';
import { useState, FormEvent, FocusEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, handleAuthErrors, RootState, auth } from '../../store';
import { useLocation } from 'react-router-dom';
import { AuthFormInputProps } from './types';
import { inputFields } from './assets/formData';
import { returnErrorMessage } from './helpers';
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
    [key: string]: string;
  }>({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleInputSelect = (e: FocusEvent<HTMLInputElement>): void => {
    const { name } = e.target;
    dispatch(handleAuthErrors({ [name]: undefined }));
  };

  const handleInputUnselect = (e: FocusEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    dispatch(handleAuthErrors(returnErrorMessage(name, value)));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      if (pathname === '/signup') {
        dispatch(auth({ action: pathname, data: formData }));
      } else {
        dispatch(
          auth({ action: pathname, data: { ...formData, email: undefined } })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderedInputFields = inputFields.map((field: AuthFormInputProps) => {
    if (field.displayroute && field.displayroute !== pathname) {
      return;
    }
    return (
      <AuthFormInput
        key={field.name}
        filled={formData[field.name] && (formData[field.name] as string).length}
        label={field.placeholder}
        onChange={handleInputChange}
        onSelect={handleInputSelect}
        onBlur={handleInputUnselect}
        errormsg={errors?.[field.name]?.message}
        {...field}
      >
        <span className='auth_error'>{errors?.[field.name]?.message}</span>
      </AuthFormInput>
    );
  });

  const userAction = pathname === '/signup' ? 'Sign Up' : 'Login';

  return (
    <AuthForm onSubmit={handleSubmit} action={userAction}>
      {renderedInputFields}
    </AuthForm>
  );
}
