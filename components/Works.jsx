import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Works = ({ post }) => {
  return (
    <div className='my-40'>
      <div className='grid items-center max-w-[380px] mx-auto gap-y-16 grid-cols-1 lg:grid-cols-2 lg:max-w-[1120px] lg:gap-8'>
        {post.map((post) => (
          <article
            className='hover:cursor-pointer'
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
          </article>
        ))}
      </div>
    </div>
  );
};

export default Works;
