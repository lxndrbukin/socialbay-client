import { ReactNode, FormEventHandler } from 'react';

export type AuthInputField = {
  name: string;
  placeholder: string;
  displayRoute?: string;
};

export type AuthFormInputProps = {
  [key: string]: any;
};

export type AuthFormProps = {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
  buttonText: string;
  redirectText?: string;
  redirectURLText?: string;
  redirectURL?: string;
};
