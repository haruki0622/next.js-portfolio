import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { faTwitter,faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Sns() {
  return (
    <ul className='flex items-center mt-4 justify-center xl:justify-start'>
      <li className='mx-5 xl:mx-0 xl:mr-5'>
        <a
          className='hover:underline hover:text-blue-600'
          href='https://twitter.com/haruharu_0622x'
        >
          <FontAwesomeIcon icon={faTwitter} className="text-2xl"/>
        </a>
      </li>
      <li className='mx-5'>
        <a className='hover:underline hover:text-blue-600' href='https://github.com/haruki0622'>
        <FontAwesomeIcon icon={faGithub} className="text-2xl"/>
        </a>
      </li>
      <li className='mx-5'>
        <a className='hover:underline hover:text-blue-600' href='https://haru-haru0.com/'>
          <Image src='/blog-logo.svg' alt='ブログロゴ画像' width={35} height={20} objectFit="cover" />
        </a>
      </li>
    </ul>
  );
}
