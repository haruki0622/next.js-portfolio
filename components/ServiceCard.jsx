import Image from 'next/image';

export default function ServiceCard({ src, title, description }) {
  return (
    <div>
      <div className='w-[100%]'>
        <Image src={src} layout='responsive' width={100} height={100} alt='service-image' />
      </div>
      <h3 className='mt-3 mb-2 text-xl lg:text-2xl lg:my-5 font-bold'>{title}</h3>
      <p className='text-base xl:text-lg leading-8 lg:leading-[2]'>{description}</p>
    </div>
  );
}
