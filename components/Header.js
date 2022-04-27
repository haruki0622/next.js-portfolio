import Link from 'next/link';
import Image from 'next/image';
import Hamburger from './Hamburger';

export default function Header() {
  return (
    <header className='py-3  xl:mx-auto xl:max-w-4xl'>
      <div className='flex justify-between'>
        <Link href='/' passHref>
          <h1>
            <a className='hover:cursor-pointer'>
              <Image src='/logo.svg' alt='logo' width={90} height={30} objectFit='contain' />
            </a>
          </h1>
        </Link>
        <Hamburger />
      </div>
    </header>
  );
}
