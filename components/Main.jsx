import Image from 'next/image';
import Sns from './Sns';

export default function Main() {
  return (
    <>
      <div className='flex flex-col mx-[30px] items-center  lg:flex-row-reverse lg:justify-between lg:py-28 lg:xl:max-w-[1120px] lg:mx-auto'>
        <div>
          <Image
            src='/profile-1.jpg'
            alt='profile-image'
            width={330}
            height={330}
            objectFit='contain'
            className='rounded-full'
          />
        </div>
        <div className="max-w-[550px]">
          <h2
            className='font-mont mt-5 inline-block text-4xl text-black font-bold text-center tracking-tight
          mb:text-[4rem]  md:leading-[1.1] lg:text-[4rem] lg:text-left xl:mt-0'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            Hello I&apos;m Haruki Izumihara
          </h2>
          <p className='text-base leading-7 mt-5 xl:leading-[1.8]'>
            初めまして。泉原遥輝です。フリーランスとしてWeb制作などのお仕事をしています！このサイトでは、実績などを紹介しています。
          </p>
          <Sns />
        </div>
      </div>
    </>
  );
}
