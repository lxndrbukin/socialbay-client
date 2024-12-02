import { AuthInputField } from '../types';

export const inputFields: Array<AuthInputField> = [
  { name: 'username', placeholder: 'Username' },
  {
    name: 'email',
    placeholder: 'Email',
    displayroute: '/signup',
  },
  { name: 'password', placeholder: 'Password' },
];
