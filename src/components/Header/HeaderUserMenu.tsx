import { useState, useRef, useEffect } from 'react';

type UserMenuLink = {
  url: string;
  text: string;
};

const links: UserMenuLink[] = [
  { url: '#', text: 'Profile' },
  { url: '#', text: 'Settings' },
  { url: '#', text: 'Log Out' },
];

export default function HeaderUserMenu(): JSX.Element {
  const [active, setActive] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return (): void => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleInsideClick = (): void => {
    setActive(true);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (dropdownRef.current && dropdownRef.current.contains(e.target as Node)) {
      setActive(false);
      console.log(active);
    }
  };

  const renderedLinks = links.map(({ url, text }: UserMenuLink) => (
    <li key={text}>
      <a href={url}>{text}</a>
    </li>
  ));

  const renderedDropdown = active && (
    <div ref={dropdownRef} className='header_user_menu-dropdown'>
      <div className='header_user_menu-dropdown_info'>
        <div className='avatar-placeholder'></div>
        nickname
      </div>
      <ul className='header_user_menu-dropdown_links'>{renderedLinks}</ul>
    </div>
  );

  return (
    <div className='header_user'>
      <div className='header_user_menu'>
        <div onClick={handleInsideClick} className='header_user_menu-icon'>
          <div className='icon-placeholder'></div>
        </div>
        {renderedDropdown}
      </div>
    </div>
  );
}
