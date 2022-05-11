import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';
import HamburgerMenu from './HamburgerMenu';

export default function Header() {
  return (
    <header className='py-3  xl:mx-auto xl:max-w-4xl'>
      <div className='flex justify-between items-center'>
        <h1>
          <Link href='/'>
            <a className='hover:cursor-pointer'>
              <Image src='/logo.svg' alt='logo' width={90} height={30} objectFit='contain' />
            </a>
          </Link>
        </h1>
        <Navbar />
        <HamburgerMenu />
      </div>
    </header>
  );
}
