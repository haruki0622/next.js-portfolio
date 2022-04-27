// module
import { client } from '../libs/client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import css from "styled-jsx/css";

// components
import Layout from '../components/Layout';
// import Skill from '../components/Contact';
import Service from '../components/Service';
import Main from '../components/Main';
import Heads from '../components/Heads';
import Skills from '../components/Skills';

export default function Home({ post }) {
  return (
    <div>
      <Heads
        title='泉原遥輝 | Haruki Izumihara'
        description='大阪市でWeb系のフリーランスをしています。本サイトはポートフォリオの掲載や営業目的で作成しました。お気軽にお問い合わせ下さい。'
        url='https://portfolio.haru-haru0.com/'
      />
      <Layout>
        <Main />
        <Skills />
        <Service />
        <div className='my-40'>
          <ul className='w-[100%] m-auto flex flex-col xl:flex-row xl:flex-wrap xl:justify-center xl:w-[93%]'>
            {post.map((post) => (
              <li
                className='md:w-full xl:w-[40%] mb-10 xl:m-6 hover:cursor-pointer'
                key={post.id}
                data-aos='fade-up'
                data-aos-duration='1000'
                data-aos-easing='ease'
              >
                <Link href={`/works/${post.id}`} passHref>
                  <div className='relative max-w-full'>
                    <Image
                      src={post.thumbnail.url}
                      alt='サムネイル画像'
                      width={640}
                      height={500}
                      objectFit='contain'
                      className='rounded-sm'
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'portfolio' });

  return {
    props: {
      post: data.contents,
    },
  };
};
