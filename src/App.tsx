import './assets/styles.scss';
import { Outlet } from 'react-router-dom';

export default function App(): JSX.Element {
  return (
    <div className="app_container">
      <Outlet />
    </div>
  );
}
