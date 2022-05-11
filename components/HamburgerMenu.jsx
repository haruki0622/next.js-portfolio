import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenuAlt1 } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';

const HamburgerMenu = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  return (
    <>
      <div className='lg:hidden'>
        <HiMenuAlt1 fontSize={26} onClick={() => setShowHamburger(true)} />
      </div>
      {showHamburger && (
        <nav className='w-full h-full bg-gray-800 fixed top-0 left-0 z-10'>
          <div className='absolute top-5 right-3 z-20 text-xl text-white'>
            <FaTimes fontSize={26} onClick={() => setShowHamburger(false)} />
          </div>
          <ul className='flex flex-col items-center justify-center'>
            <li className='mt-32 mb-10'>
              <Link href='/about'>
                <a className='text-white text-xl md:text-2xl'>About</a>
              </Link>
            </li>
            <li>
              <Link href='https://next-js-blog-nine-liart.vercel.app/'>
                <a  target="_blank" className='text-white text-xl md:text-2xl'>Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default HamburgerMenu;
