import { AuthFormProps } from './types';
import { Link } from 'react-router-dom';

export default function AuthForm({
  children,
  onSubmit,
  buttonText,
}: AuthFormProps): JSX.Element {
  return (
    <div className="auth">
      <h1>Sign Up</h1>
      <form onSubmit={onSubmit} className="auth_form">
        {children}
        <button>{buttonText}</button>
      </form>
      <p>OR</p>
      <div className="auth_third_party">
        <Link className="link google" to="#">
          <img
            src="https://img.icons8.com/?size=512&id=17949&format=png"
            alt="Google"
          />
          <span>Sign Up with Google</span>
        </Link>
        <Link className="link facebook" to="#">
          <img
            src="https://img.icons8.com/?size=100&id=118467&format=png&color=ffffff"
            alt="Facebook"
          />
          <span>Sign Up with Facebook</span>
        </Link>
      </div>
    </div>
  );
}
