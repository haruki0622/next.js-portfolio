import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='p-5 xl:w-[70%] xl:m-auto'>
      <div className='flex items-center justify-between'>
        <Link href='/' passHref>
          <h1>
            <a className='relative block font-bold xl:text-[1.4rem] hover:cursor-pointer'>
              haruharu
            </a>
          </h1>
        </Link>
        <nav>
          <ul>
            <eli>
              <Link href='/about'>
                <a className='relative block w-[130px] xl:w-[130px] h-[30px] font-bold hover:cursor-pointer'>
                  About
                </a>
              </Link>
            </eli>
          </ul>
        </nav>
      </div>
    </header>
  );
}
