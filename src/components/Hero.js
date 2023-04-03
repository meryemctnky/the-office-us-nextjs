import Link from 'next/link';

const Hero = () => {
  return (
    <header className='container mx-auto my-4 bg-header-pattern bg-top bg-cover overflow-hidden relative h-screen max-h-[90vh]'>
      <div className='h-full flex flex-col justify-end text-light'>
        <p className='text-5xl text-center tracking-widest mb-3'>
          Dunder Mifflen
        </p>
        <p className='text-lg text-center tracking tracking-widest mb-3'>
          EST 1949 Scranton, Pennysylvania
        </p>
        <div className='text-center'>
          <Link href='https://www.netflix.com/ca/title/70136120'>
            <button className='inline-block px-5 py-2 mb-3 bg-primary text-light rounded-xl tracking-wider text-lg shadow-2xl'>
              watch now
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;
