import './assets/styles.scss';
import HeaderUserMenu from './HeaderUserMenu';
import HeaderSearchBar from './HeaderSearchBar';

export default function Header(): JSX.Element {
  return <header className='header_container'>
    <div className='header'>
      <div className='header_logo'>SocialBay</div>
      <HeaderSearchBar />
      <HeaderUserMenu />
    </div>
  </header>
}