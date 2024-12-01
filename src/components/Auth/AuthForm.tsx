import { AuthFormProps } from './types';
import { Link } from 'react-router-dom';

export default function AuthForm({
  children,
  onSubmit,
  action,
}: AuthFormProps): JSX.Element {
  return (
    <div className="auth">
      <h1>Welcome to SocialBay</h1>
      <div className="auth_form_container">
        <form onSubmit={onSubmit} className="auth_form">
          {children}
          <button>{action}</button>
        </form>
        <p className="auth_separator">
          <span className="auth_separator_text">OR</span>
          <span className="auth_separator_line"></span>
        </p>
        <div className="auth_third_party">
          <Link className="link google" to="#">
            <img
              src="https://img.icons8.com/?size=512&id=17949&format=png"
              alt="Google"
            />
            <span>{action} with Google</span>
          </Link>
          <Link className="link facebook" to="#">
            <img
              src="https://img.icons8.com/?size=100&id=118467&format=png&color=ffffff"
              alt="Facebook"
            />
            <span>{action} with Facebook</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
