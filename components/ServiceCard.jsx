import Image from 'next/image';

export default function ServiceCard({ imageSrc, serviceTitle, serviceContent }) {
  return (
    <>
      <div
        className='my-10 w-[80%] flex flex-col xl:w-[25%] items-center'
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        <Image
          src={imageSrc}
          quality={70}
          width={350}
          height={350}
          objectFit='contain'
          alt='service-image'
        />
        <p className='text-2xl xl:text-3xl font-bold'>{serviceTitle}</p>
        <p className='text-md xl:text-xl xl:leading-loose pt-6 xl:h-[150px]'>{serviceContent}</p>
      </div>
    </>
  );
}
