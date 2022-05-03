import ServiceCard from './ServiceCard';

export default function Service() {
  return (
    <div className='my-32'>
      <div className='flex flex-col xl:flex-row items-center xl:justify-between xl:justify-items-center xl:w-[80%] m-auto'>
        <ServiceCard
          imageSrc='/pc.webp'
          serviceTitle='Web制作'
          serviceContent='デザインの作成から、運用までサポートさせて頂きます。Wordpressからwix、ペライチなど幅広く対応可能です。'
        />
        <ServiceCard
          imageSrc='/seo.webp'
          serviceTitle='SEO対策、サイト分析'
          serviceContent='Webサイトを分析して、SEOを最適します。検索順位を上げて、集客効果をUPさせます。'
        />
        <ServiceCard
          imageSrc='/tool.webp'
          serviceTitle='自動化ツール'
          serviceContent='VBAやPythonを使って、Excelの自動化ツールを作成します。業務量が大幅に減って、生産性がUPします!'
        />
      </div>
    </div>
  );
}
