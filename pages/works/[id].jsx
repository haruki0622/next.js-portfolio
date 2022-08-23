import Image from 'next/image';
import markdownStyles from '../../styles/markdown-styles.module.css';
import { client } from '../../libs/client';
import Layout from '../../components/Layout';
import Heads from '../../components/Heads';
import PostDate from '../../components/PostDate';
import PostTitle from '../../components/PostTitle';

export default function BlogId({ blog }) {
  return (
    <div>
      <Heads
        title={blog.title}
        description={blog.description}
        url={`https://portfolio.haru-haru0.com/works/${blog.id}`}
      />
      <Layout>
        <div className='w-full px-7 pt-5 lg:max-w-[960px] mx-auto lg:py-10'>
          <PostTitle title={blog.title} />
          <PostDate createdAt={blog.createdAt} updatedAt={blog.updatedAt} />
          <div>
            <Image
              src={blog.thumbnail.url}
              alt='サムネイル画像'
              layout='responsive'
              objectFit='contain'
              // objectFit="cover"
              width='160'
              height='100%'
            />
          </div>
          <div className='prose lg:max-w-[80%] lg:mx-auto'>
            <div
              className={markdownStyles['markdown']}
              dangerouslySetInnerHTML={{
                __html: `${blog.body}`,
              }}
            />
          </div>
        </div>
      </Layout>
    </div>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'portfolio' });

  const paths = data.contents.map((content) => `/works/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'portfolio', contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
