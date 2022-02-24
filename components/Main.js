import ImageShadow from 'react-image-shadow';

export default function Main() {
  return (
    <div className='py-20  xl:py-40 flex flex-col xl:flex-row xl:justify-center items-center'>
      <h2 className='mt-5 inline-block text-4xl text-black font-bold text-shadow-md leading-[1.5] xl:text-[6.5rem] xl:leading-[1.6] xl:tracking-[0.2em]'>
        驚きを
        <br />
        届けます
      </h2>
      <ImageShadow src='/main3.webp' loading={'lazy'} width={400} height={400} />
    </div>
  );
}
