import React from 'react';
import Image from 'next/image';

const ContactItem = ({ title, src, description, linkText, href }) => {
  return (
    <div className='flex items-center flex-col border border-black pb-7'>
      <div className='relative w-[80%] h-[190px] md:max-w-[400px]'>
        <Image src={src} alt='アイコン' objectFit='cover' layout='fill' />
      </div>
      <div className='px-3 lg:px-4 flex items-center flex-col'>
        <h3 className='text-xl mt-4 font-bold mb-3'>{title}</h3>
        <p className='text-center text-sm mb-3 lg:text-lg'>{description}</p>
        <a className='bg-black py-2 px-4 text-white text-base border-black border lg:text-lg hover:bg-white hover:text-black duration-500 hover:duration-500 box-border' href={href}>
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default ContactItem;
