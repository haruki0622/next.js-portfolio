import Head from 'next/head';

export default function Heads({ title, description, url }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name='google-site-verification' content='GWYPDpuod9h1brDQO8-irBeGvFjsOlmxpoYyqbo8H9c' />
      <meta name='viewport' content='width=device-width' />
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='blog' />
      <meta property='og:url' content={url} />
      <meta property='og:site_name' content={title} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@haruharu_0622x' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <link rel='canonical' href={url} />
    </Head>
  );
}
