export default function Contact() {
  return (
    <div className='text-center my-40'>
      <h3 className='text-3xl text-center font-bold xl:text-8xl text-shadow-md xl:mb-10'>Contact</h3>
      <span className='text-center mt-2 text-xl xl:text-2xl text-shadow-none block font-normal xl:mt-5'>
        コンタクト
      </span>
      <div className='flex flex-col mt-5 xl:mt-0'>
        <a
          className='font-lora inline-block text-2xl text-black m-5 hover:text-blue-600 hover:underline xl:text-6xl'
          href='https://twitter.com/haruharu_0622x'
        >
          Twitter
        </a>
        <a
          className='font-lora inline-block text-2xl text-black m-5 hover:text-blue-600 hover:underline xl:text-6xl'
          href='mailto:izu.0622h@gmail.com'
        >
          izu.0622h@gmail.com
        </a>
      </div>
    </div>
  );
}
