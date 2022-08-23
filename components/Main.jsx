import Image from 'next/image';
import Sns from './Sns';

export default function Main() {
  return (
    <>
      <div className='mt-10 flex flex-col mx-[30px] items-center  lg:flex-row-reverse lg:justify-around lg:py-28 lg:xl:max-w-[1120px] lg:mx-auto'>
        <div className='w-[80%]  md:max-w-[400px]'>
          <Image src='/profile-3.jpg' alt='画像' width={250} height={250} layout='responsive' />
        </div>
        <div className='max-w-[680px]'>
          <h2
            className='font-mont mt-5 text-4xl text-black font-bold text-center tracking-tight
          mb:text-[4rem]  md:leading-[1.1] lg:text-[4rem] lg:text-left xl:mt-0'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            Hello!
            <br /> I&apos;m Haruki Izumihara
          </h2>
          <p className='text-base max-w-[500px] text-center leading-7 mt-5 lg:text-left xl:leading-[1.8]'>
            こんにちわ。泉原遥輝です。大阪市内でフリーランスとしてWeb制作やLPの作成をしています！このサイトでは、実績やスキルについて紹介しています。お仕事のご相談はメールかTwitterからお願いします。
          </p>
          <Sns justifyStart='lg:justify-start' />
        </div>
      </div>
    </>
  );
}
