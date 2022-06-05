import ServiceCard from './ServiceCard';
import SectionTitle from './text/SectionTitle';
import SectionText from './text/SectionText';

export default function Service() {
  return (
    <section className='py-[70px] lg:py-[100px] my-[100px] bg-gray-100'>
      <div className="lg:max-w-[1120px] mx-auto px-[30px]">
        <SectionTitle>幅広いお仕事をしています！</SectionTitle>
        <SectionText>WordPress、LPの作成から業務改善ツールの作成をしています。</SectionText>
        <div className='grid grid-cols-1 mx-auto gap-14 max-w-[380px] lg:px-0 lg:max-w-none lg:grid-cols-3 lg:gap-[36px]'>
          <ServiceCard
            src='/wrordpress.jpg'
            title='WordPress'
            description='WordPress、LPの作成をしています。目的を達成するお手伝いをします。'
          />
          <ServiceCard
            src='/front-coding.jpg'
            title='フロントコーディング'
            description='HTML,CSSのフロントコーディングを行います。JacaScriptも可能です。'
          />
          <ServiceCard
            src='/auto-tool.jpg'
            title='業務改善ツール'
            description='業務改善ツールを作成します。3Hの作業が5分に短縮します。'
          />
        </div>
      </div>
    </section>
  );
}
