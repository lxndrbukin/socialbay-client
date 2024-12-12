import './assets/styles.scss';
import HeaderUserMenu from './HeaderUserMenu';

export default function Header(): JSX.Element {
  return <header className='header_container'>
    <div className='header'>
      <div className='header_logo'>SocialBay</div>
      <HeaderUserMenu />
    </div>
  </header>
}