import React from 'react';
import Image from 'next/image';

const FeaturesItem = ({ src, order, title, description }) => {
  return (
    <div className='grid grid-cols-1 items-center lg:grid-cols-2'>
      <div className={`max-w-[500px] ${order}`}>
        <Image src={src} layout='responsive' width={100} height={100} alt='service-image' />
      </div>
      <div className="max-w-[460px]">
        <h3 className="text-2xl font-bold mb-4 mt-3 lg:mb-7 lg:text-3xl">{title}</h3>
        <p className="text-base lg:text-lg leading-[1.7]">{description}</p>
      </div>
    </div>
  );
};

export default FeaturesItem;
