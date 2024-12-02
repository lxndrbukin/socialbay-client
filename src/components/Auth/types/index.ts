import { ReactNode, FormEventHandler } from 'react';

export type AuthInputField = {
  name: string;
  placeholder: string;
  displayroute?: string;
};

export type AuthFormInputProps = {
  [key: string]: any;
};

export type AuthFormProps = {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
  action: string;
  redirectText?: string;
  redirectURLText?: string;
  redirectURL?: string;
};
