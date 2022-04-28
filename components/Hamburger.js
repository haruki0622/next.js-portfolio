import Link from 'next/link';
import { push as Menu } from 'react-burger-menu';
import '../styles/style.module.css';

export default function Hamburger() {
  return (
    <Menu right width={'100%'} noOverlay>
      <ul>
        <li className="text-center">
          <Link href='/about'>
            <a className='text-2xl xl:text-6xl text-white'>ABOUT</a>
          </Link>
        </li>
      </ul>
    </Menu>
  );
}
