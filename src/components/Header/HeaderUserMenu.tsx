export default function HeaderUserMenu(): JSX.Element {
  return <div className='header_user'>
  <div className='header_user_menu'>
    <div className='header_user_menu-icon'>
      <div className='icon-placeholder'></div>
    </div>
    <div className="header_user_menu-dropdown">
      <div className='header_user_menu-dropdown_info'>
        <div className='avatar-placeholder'></div>
        nickname
      </div>
      <ul className='header_user_menu-dropdown_links'>
        <li><a href=''>Link 1</a></li>
        <li><a href=''>Link 2</a></li>
        <li><a href=''>Link 3</a></li>
      </ul>
    </div>
  </div>
</div>
}