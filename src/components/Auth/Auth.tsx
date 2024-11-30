import './assets/styles.scss';

export default function Auth(): JSX.Element {
  return (
    <div className="auth">
      <form className="auth_form">
        <div className="auth_form_input">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
          />
        </div>
        <div className="auth_form_input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="auth_form_input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
