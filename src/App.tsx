import './assets/styles.scss';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

export default function App(): JSX.Element {
  return (
    <div className="app_container">
      <Header />
      <Outlet />
    </div>
  );
}
