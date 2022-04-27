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
        <div className='flex flex-col'>
          <div className='mt-5 xl:w-[55%] m-auto flex flex-col  xl:flex-row-reverse xl:justify-around xl:my-[100px]'>
            <Image
              src='/profile.jpg'
              width={330}
              height={330}
              className='rounded-full'
              objectFit='contain'
              alt='プロフィール画像'
            />
            <div className='xl:w-[40%] p-3 xl:p-8'>
              <p className='text-base mb-3 leading-[2]'>
                大阪市内でフリーランスとして活動している、泉原遥輝 (Haruki
                Izumihara)です。Web制作、LPなどをメインの業務としています。デザインからWebサイトの作成まで一括で受注しています。SEO対策やレスポンシブ対応も可能です。
              </p>
              <Sns className="xl:text-left" />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
