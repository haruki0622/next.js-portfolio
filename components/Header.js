import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='px-5 xl:w-[70%] xl:m-auto'>
      <div className='flex items-center justify-between'>
        <Link href='/' passHref>
          <h1>
            <a className='relative block font-bold xl:text-[1.4rem] hover:cursor-pointer'>
              <Image src='/logo1.png' alt='logo' width={100} height={50} ></Image>
            </a>
          </h1>
        </Link>
        <nav>
          <ul>
            <eli>
              <Link href='/about'>
                <a className='relative block h-[30px] hover:cursor-pointer'>
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
