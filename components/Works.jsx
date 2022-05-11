import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Works = ({ post }) => {
  return (
    <div className='my-40'>
      <ul className='w-[100%] m-auto flex flex-col xl:flex-row xl:flex-wrap xl:justify-center xl:w-[93%]'>
        {post.map((post) => (
          <li
            className='md:w-full xl:w-[40%] mb-10 xl:m-6 hover:cursor-pointer'
            key={post.id}
            data-aos='fade-up'
            data-aos-duration='1000'
            data-aos-easing='ease'
          >
            <Link href={`/works/${post.id}`} passHref>
              <div className='relative max-w-full'>
                <Image
                  src={post.thumbnail.url}
                  alt='サムネイル画像'
                  width={640}
                  height={500}
                  objectFit='contain'
                  className='rounded-sm'
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Works;
