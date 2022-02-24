import { client } from '../libs/client';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import Skill from '../components/Contact';
import Service from '../components/Service';
import Main from '../components/Main';
import About from '../components/About';
import Heads from '../components/Heads';

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
        <About />
        <Service />
        <div className='my-40'>
          <h3 className='text-3xl text-center font-bold xl:text-8xl text-shadow-md xl:mb-10'>
            Portfolio
          </h3>
          <span className='text-center mt-2 text-xl xl:text-2xl text-shadow-none block font-normal xl:mt-5'>
            ポートフォリオ
          </span>
          <ul className='w-[85%] m-auto flex flex-col items-center xl:w-[100%]'>
            {post.map((post) => (
              <li className='xl:w-[60%] my-20' key={post.id}>
                <Link href={`/works/${post.id}`}>
                  <a className='rounded-lg flex flex-col xl:justify-around xl:items-center xl:flex-row transition duration-500 ease-in-out hover:shadow-2xl'>
                    <Image
                      src={post.thumbnail.url}
                      quality={70}
                      width={450}
                      height={450}
                      objectFit='contain'
                      alt='サムネイル画像'
                    />
                    <div className='p-2 xl:p-5 xl:w-[45%]'>
                      <h4 className='text-xl mb-5 xl:text-3xl font-bold'>{post.title}</h4>
                      <p className='text-md xl:text-lg leading-[1.7]'>{post.description}</p>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Skill />
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
