import ImageShadow from 'react-image-shadow';
import 'react-image-shadow/assets/index.css';

export default function Service() {
  return (
    <div className='my-40 xl:min-w-screen xl:min-h-screen'>
      <h3 className='text-3xl text-center font-bold xl:text-8xl text-shadow-md xl:mb-10'>
        Services
      </h3>
      <span className='text-center mt-2 text-xl xl:text-2xl text-shadow-none block font-normal xl:mt-5'>
        サービス
      </span>
      <div className='flex flex-col xl:flex-row items-center xl:justify-between xl:justify-items-center xl:w-[80%] m-auto'>
        <div
          className='my-10 w-[80%] flex flex-col xl:w-[25%] items-center'
          // data-aos='fade-up'
          // data-aos-duration='1000'
          // data-aos-easing='ease-in-out'
        >
          <ImageShadow
            src='/pc.webp'
            quality={70}
            width={350}
            height={350}
            objectFit='contain'
            alt='pc-image'
            shadowHover='true'
          />
          <p className='text-xl xl:text-3xl font-bold'>Web制作</p>
          <p className='text-md xl:text-xl leading-[1.6] pt-6 xl:h-[150px]'>
            デザインの作成から、運用までサポートさせて頂きます。Wordpressからwix、ペライチなど幅広く対応可能です。
          </p>
          <p className='text-md xl:text-lg mt-5'>
            <span className='font-bold mx-3'>Wordpress</span>
            <span className='font-bold mx-3'>Jamstack</span>
          </p>
        </div>
        <div
          className='my-10 w-[80%] flex flex-col xl:w-[25%] items-center'
          // data-aos='fade-up'
          // data-aos-duration='1000'
          // data-aos-easing='ease-in-out'
        >
          <ImageShadow
            src='/seo.webp'
            quality={70}
            width={350}
            height={350}
            objectFit='contain'
            alt='pc-image'
            shadowHover='true'
          />
          <p className='text-xl xl:text-3xl font-bold'>SEO対策、現状分析</p>
          <p className='text-md h-auto xl:text-xl leading-[1.6] pt-6 xl:h-[150px]'>
            Webサイトを分析して、SEOを最適します。検索順位を上げて、集客効果をUPさせます。
          </p>
          <p className='text-md xl:text-lg mt-5'>
            <span className='font-bold mx-3'>SEO</span>
            <span className='font-bold mx-3'>Google Analytics</span>
          </p>
        </div>
        <div
          className='my-10 w-[80%] flex flex-col xl:w-[25%] items-center'
          // data-aos='fade-up'
          // data-aos-duration='1000'
          // data-aos-easing='ease-in-out'
        >
          <ImageShadow
            src='/tool.webp'
            quality={70}
            width={350}
            height={350}
            objectFit='contain'
            alt='pc-image'
            shadowHover='true'
          />
          <p className='text-xl xl:text-3xl font-bold'>自動化ツールの作成</p>
          <p className='text-md h-auto xl:text-xl leading-[1.6] pt-6 xl:h-[150px]'>
            VBAやPythonを使って、Excelの自動化ツールを作成します。業務量が大幅に減って、生産性がUPします！
          </p>
          <p className='text-md xl:text-lg mt-5'>
            <span className='font-bold mx-3'>EXCEL</span>
            <span className='font-bold mx-3'>Python</span>
          </p>
        </div>
      </div>
    </div>
  );
}
