import Image from 'next/image';

import Sns from "./Sns"

export default function Main() {
  return (
    <>
      <div className='flex flex-col pt-10 xl:flex-row-reverse xl:xl:max-w-[1040px] xl: xl:mx-auto xl:py-[10rem]'>
        <div className='text-center xl:w-[50%]'>
          <Image
            src='/profile.jpg'
            alt='profile-image'
            width={330}
            height={330}
            objectFit='contain'
            className='rounded-full'
          />
        </div>
        <div className='xl:w-[40%]'>
          <h2
            className='mt-5 inline-block text-4xl font-pd tracking-wide text-black font-bold leading-relaxed text-center
          mb:text-[4rem]  md:leading-relaxed xl:text-[4rem] xl:text-left'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            Hello I&apos;m Haruki Izumihara
          </h2>
          <p className='text-base leading-7 mt-5 xl:leading-relaxed'>
            Web制作,LPなどのお仕事をしています。フロントエンドエンジニアとしてWebアプリの開発もしていきたいと考えています！
          </p>
          <Sns />
        </div>
      </div>
    </>
  );
}
