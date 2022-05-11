import Image from 'next/image';
import { client } from '../../libs/client';
import Layout from '../../components/Layout';
import Heads from '../../components/Heads';

export default function BlogId({ blog }) {
  return (
    <div>
      <Heads
        title={blog.title}
        description={blog.description}
        url={`https://portfolio.haru-haru0.com/works/${blog.id}`}
      />
      <Layout>
        <div className='w-[100%] m-auto xl:mt-12 flex flex-col items-center'>
          <h2 className='text-center mt-7 text-2xl font-bold mb-5 xl:text-6xl xl:font-bold xl:tracking-wider xl:mb-5'>
            {blog.title}
          </h2>
          <p className='text-sm mb-2 xl:text-base text-gray-500 font-mont tracking-[0.09em] mr-6'>
            <span>投稿日:</span>
            {new Date(blog.createdAt).toLocaleString('ja-JP')}
          </p>
          <Image
            src={blog.thumbnail.url}
            width={600}
            height={500}
            objectFit='contain'
            alt='サムネイル画像'
          />
          <div
            // className='w-11/12 prose prose-blue prose-base xl:m-0 xl:w-6/12 xl:prose-lg xl:prose-img:{shadow-md}'
            className='w-11/12 prose  prose-blue prose-base xl:m-0 xl:w-6/12 xl:prose-lg xl:prose-img:drop-shadow-2xl'
            dangerouslySetInnerHTML={{
              __html: `${blog.body}`,
            }}
          />
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
