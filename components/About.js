import Hero from './Hero';

export default function About() {
  return (
    <div className='my-44 flex xl:justify-center xl:items-center'>
      <div>
        <h3 className='text-3xl text-center font-bold xl:text-8xl text-shadow-md xl:mb-10'>About</h3>
        <span className='text-center mt-2 text-xl xl:text-2xl text-shadow-none block font-normal xl:mt-5'>私について</span>
        <Hero />
      </div>
    </div>
  );
}
