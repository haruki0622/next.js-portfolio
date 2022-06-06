import React from 'react';

import FeaturesItem from '../components/FeaturesItem';

const Features = () => {
  return (
    <div className='grid gap-y-14 max-w-[380px] lg:max-w-[1120px] mx-auto md:px-7 lg:gap-48 '>
      <FeaturesItem
        src='/sass-bem.jpg'
        title='SASS,BEMを使ったコーディング'
        description='コーディングはBEMとSCSSを使用します。効率的なコードを書くために新しいCSSプロパティーを積極的に使用ています。'
      />
      <FeaturesItem
        src='/react.jpg'
        order='lg:order-1'
        title='新しい技術の使用'
        description='新しい技術を積極的に使用しています。高パフォーマンスでセキュリティー対策も行っています。'
      />
      <FeaturesItem
        src='/tools.jpg'
        title='安全で効率的なツール'
        description='デザインはFigmaやXDを使用します。コード管理はGihHub、ビルドツールはGulpやViteを使用します。'
      />
    </div>
  );
};

export default Features;
