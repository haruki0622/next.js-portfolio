import Image from 'next/image';
import Layout from '../components/Layout';
import Heads from '../components/Heads';
import Sns from '../components/Sns';

export default function About() {
  return (
    <div>
      <Heads
        title='About | 泉原遥輝 | Haruki Izumihara'
        description='大阪市でWeb系のフリーランスをしています。本サイトはポートフォリオの掲載や営業目的で作成しました。お気軽にお問い合わせ下さい。'
        url='https://portfolio.haru-haru0.com/about'
      />
      <Layout>
        <div className='mt-5 flex flex-col  xl:flex-row-reverse md:justify-center xl:my-[100px]'>
          <div className='block text-center xl:w-[20%]'>
            <Image
              src='/profile-1.jpg'
              alt='profile-image'
              width={330}
              height={330}
              objectFit='contain'
              className='rounded-full'
            />
          </div>
          <div className='xl:w-[40%] xl:p-8'>
          <h2 className='text-3xl font-bold'>ABOUT</h2>
            <p className='text-base mb-3 leading-[2] xl:text-lg xl:leading-[2.5]'>
              大阪市内でフリーランスとして活動している、泉原遥輝 (Haruki
              Izumihara)です。Web制作、LPなどをメインの業務としています。デザインからWebサイトの作成まで一括で受注しています。SEO対策やレスポンシブ対応も可能です。<br />
              
            </p>
            <Sns />
          </div>
        </div>
      </Layout>
    </div>
  );
}
