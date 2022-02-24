import Image from 'next/image';
import Layout from '../components/Layout';
import Heads from '../components/Heads';
import Sns from '../components/Sns';
import ImageShadow from 'react-image-shadow';
import 'react-image-shadow/assets/index.css';

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
          <div className='w-[80%] mt-5 xl:w-[55%] m-auto flex flex-col xl:flex-row xl:justify-around xl:my-[100px]'>
            <Image
              src='/profile.webp'
              width={400}
              height={400}
              objectFit='contain'
              alt='profile-image'
              quality={70}
            />
            <div className='xl:w-[40%] p-3 xl:p-8'>
              <h2 className='text-2xl xl:text-5xl font-bold mb-5 text-shadow-md'>About</h2>
              <p className='text-lg mb-3 leading-[2.3]'>
                大阪市内でフリーランスとして活動している、泉原遥輝 (Haruki
                Izumihara)です。Web制作、LPなどをメインの業務としています。デザインからWebサイトの作成まで一括で受注しています。SEO対策やレスポンシブ対応も可能です。
              </p>
              <Sns />
            </div>
          </div>
          <div className='w-[70%] mt-5 xl:w-[60%] m-auto flex flex-col xl:flex-row-reverse xl:justify-center xl:my-[100px]'>
            <Image
              src='/coding2.png'
              width={550}
              height={550}
              objectFit='contain'
              alt='skill-image'
              quality={70}
            />
            <div className='xl:w-[30%] p-3 xl:p-8'>
              <h3 className='text-2xl xl:text-5xl text-shadow-md font-bold mb-5'>Skill</h3>
              <ul>
                <li className="text-xl xl:text-2xl my-3">HTML,CSS</li>
                <li className="text-xl xl:text-2xl my-3">Javascript</li>
                <li className="text-xl xl:text-2xl my-3">php</li>
                <li className="text-xl xl:text-2xl my-3">Wordpress</li>
                <li className="text-xl xl:text-2xl my-3">Github</li>
                <li className="text-xl xl:text-2xl my-3">Tailwind</li>
                <li className="text-xl xl:text-2xl my-3">jQuery</li>
                <li className="text-xl xl:text-2xl my-3">React.js</li>
                <li className="text-xl xl:text-2xl my-3">Next.js</li>
              </ul>
            </div>
          </div>
          <div className='w-[70%] mt-5 xl:w-[60%] m-auto flex flex-col xl:flex-row xl:justify-center xl:my-[100px]'>
            <Image
              src='/likes4.png'
              width={600}
              height={400}
              objectFit='cover'
              alt='skill-image'
              quality={100}
            />
            <div className='xl:w-[45%] p-3 xl:p-8'>
              <h3 className='text-2xl xl:text-5xl text-shadow-md font-bold mb-5'>Likes</h3>
              <p className="text-lg mb-3 leading-[2.3]">好きなことは読書をしたり、散歩、旅行が好きです！楽しい事をして、やりたいことをすることを人生の最優先事項にしています！</p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
