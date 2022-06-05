import { client } from '../libs/client';

import Layout from '../components/Layout';
import Service from '../components/Service';
import Main from '../components/Main';
import Heads from '../components/Heads';
import Skills from '../components/Skills';
import Works from '../components/Works';
import Features from '../components/Features';
import Contact from '../components/Contact';

export default function Home({ post }) {
  return (
    <>
      <Heads
        title='泉原遥輝 | Haruki Izumihara'
        description='大阪市でWeb系のフリーランスをしています。本サイトはポートフォリオの掲載や営業目的で作成しました。お気軽にお問い合わせ下さい。'
        url='https://portfolio.haru-haru0.com/'
      />
      <Layout>
        <Main />
        {/* <Skills /> */}
        <Service />
        <Features />
        <Works post={post} />
        <Contact />
      </Layout>
    </>
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
