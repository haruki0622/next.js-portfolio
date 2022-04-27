import Link from 'next/link';
import { push as Menu } from 'react-burger-menu';
import "../styles/style.module.css"

export default function Hamburger({props}) {
  return (
    <Menu pageWrapId={ "page-wrap" } right width={'100%'} noOverlay {...props}>
      <Link href='/about' passHref>
        about
      </Link>
    </Menu>
  );
};
