import React from 'react';
import Image from 'next/image';

const ContactItem = ({ title, src, description, linkText, href }) => {
  return (
    <div className='flex items-center flex-col border border-gray-100 pb-7'>
      <div className='w-[70%]'>
        <Image
          src={src}
          alt='アイコン'
          width={100}
          height={100}
          objectFit='cover'
          layout='responsive'
        />
      </div>
      <div className='px-3 lg:px-4 flex items-center flex-col'>
        <h3 className='text-2xl mt-4 font-bold mb-3'>{title}</h3>
        <p className='text-center text-base mb-3 lg:text-lg'>{description}</p>
        <a className='bg-black py-2 px-4 rounded-md text-white text-base lg:text-lg' href={href}>
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default ContactItem;
