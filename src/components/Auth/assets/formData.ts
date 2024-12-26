import { AuthInputField } from '../types';

export const inputFields: Array<AuthInputField> = [
  { name: 'username', placeholder: 'Username', type: 'text' },
  {
    name: 'email',
    placeholder: 'Email',
    displayroute: '/signup',
    type: 'email',
  },
  { name: 'password', placeholder: 'Password', type: 'password' },
];
