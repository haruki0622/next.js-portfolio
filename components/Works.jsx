import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Works = ({ post }) => {
  return (
    // <div className='my-20 grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:max-w-[1120px] mx-auto lg:lg:gap-x-10'>
    <div className='my-20 grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:max-w-[1120px] mx-auto lg:gap-y-0 lg:grid-cols-1'>
      {post.map((post) => (
        <article
          className='hover:cursor-pointer hover:bg-gray-100 hover:duration-500 duration-500 px-[30px] pt-[20px] border-t-2 lg:px-0 lg:border-t-2 lg:py-14 lg:border-b-1'
          key={post.id}
        >
          <Link href={`/works/${post.id}`}>
            <a className='lg:flex lg:justify-around lg:items-center'>
              <div className='lg:w-[50%]'>
                <h3 className='text-xl mb-2 font-bold lg:text-2xl lg:mb-5'>{post.title}</h3>
                <p className='leading-7 mb-2'>{post.description}</p>
              </div>
              <div className='lg:w-[30%]'>
                <Image
                  src={post.thumbnail.url}
                  alt='サムネイル画像'
                  layout='responsive'
                  objectFit='contain'
                  // width='362'
                  // height='100%'
                  width='1200'
                  height='700'
                />
              </div>
            </a>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default Works;
