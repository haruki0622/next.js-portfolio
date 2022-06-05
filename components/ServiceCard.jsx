import Image from 'next/image';

export default function ServiceCard({ src, title, description }) {
  return (
    <>
      <div>
        <Image src={src} layout='responsive' width={350} height={350} alt='service-image' />
        <p className='mt-3 mb-2 text-xl lg:text-2xl lg:my-5 font-bold'>{title}</p>
        <p className='text-base xl:text-lg leading-8 lg:leading-[2]'>{description}</p>
      </div>
    </>
  );
}
