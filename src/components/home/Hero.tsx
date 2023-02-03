import React from 'react';
import CreateProject from './CreateProject';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <div>
        <section className='mb-40'>
          <div className='container mx-auto px-6 md:px-12 xl:px-32'>
            <div className='text-center text-gray-800'>
              <div className='block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12 bg-white opacity-80 mt-32'>
                <h1 className='text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12'>
                  The best offer on the market <br />
                  <span className='text-amber-500'>for your business</span>
                </h1>
                <CreateProject />
                <p className='text-sm text-gray-500 italic pt-2'>It's free!</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
