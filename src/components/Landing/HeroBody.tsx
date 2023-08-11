export default function HeroBody() {
  return (
    <div className='h-full'>
      <div className=''>
        {/* Hero Text */}
        <div className='  mb-10 space-y-6 flex flex-col items-center'>
          <h1 className='text-5xl text-white leading-loose text-center font-bold'>
            Let the world see all you <span className='p-3 rounded-full bg-light-accent'>do</span>
          </h1>
          <p className='text-xl font-medium text-center text-gray-200 leading-normal'>
            Every project holds immense potential, waiting for its moment to shine. You possess the ingenuity, and now it's time to showcase your accomplishments on a platform that amplifies your <span className=' text-light-dingley'>pride</span> and dedication. Let the world witness the extraordinary impact of your work – because no endeavor is trivial when it's a testament to your <span className=' text-light-dingley'>passion and creativity</span>.
          </p>

          <button class="bg-white text-light-dingley rounded-xl shadow-xl py-4 px-4 font-bold transition duration-300 transform hover:scale-105 hover:bg-opacity-80 focus:outline-none ring ring-light-accent">
    Create Your Portfolio Now
</button>

        </div>
      </div>
    </div>
  );
}
