import React from 'react';

export default function Skills() {
  return (
    <div className='bg-black pb-32 pt-16 rounded-md mt-[10rem] mb-[10rem] xl:py-[17rem]'>
      <h3 className=' text-white text-6xl font-pd font-bold mb-14 tracking-[-0.1em] leading-4 text-center md:text-[6rem] xl:text-[8rem] '>
        Value
      </h3>
      <div>
        <ul className='pt-7 xl:w-[60%] xl:mx-auto xl:pt-[7rem]'>
          <li className='text-xl mb-10 xl:mb-20 text-white xl:text-4xl tracking-wider text-center'>
            SCSS/BEMコーディング
          </li>
          <li className='text-xl mb-10 xl:mb-20 text-white xl:text-4xl tracking-wider list-inside text-center'>
            デザイン、Web制作、LP作成
          </li>
          <li className='text-xl mb-10 xl:mb-20 text-white xl:text-4xl tracking-wider list-inside text-center'>
            React/TypeScriptのモダンフロントエンド
          </li>
        </ul>
      </div>
    </div>
  );
}
