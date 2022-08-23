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
        <div className='flex flex-col w-full px-7 pt-5 lg:max-w-[960px] mx-auto lg:py-10 lg:flex-row-reverse lg:items-start lg:justify-between'>
          <div className='max-w-[400px] lg:w-[30%]'>
            <Image
              src='/profile-3.jpg'
              alt='サムネイル画像'
              layout='responsive'
              objectFit='contain'
              width='1200'
              height='1200'
            />
          </div>
          <div className='w-full max-w-[500px]'>
            <p className='text-lg leading-8 tracking-wide'>
              大阪府でフリーランスとして活動しています。主なお仕事はWeb制作やLPのお仕事を請け負っています。好きな事は科学や、読書、散歩です。知的好奇心が高く、何でも調べる癖があります（笑）直近は海外生活を始めたくてvlogもしてみたいです！よろしくお願いします。
            </p>
            <Sns justifyStart='lg:justify-start'/>
          </div>
        </div>
      </Layout>
    </div>
  );
}
