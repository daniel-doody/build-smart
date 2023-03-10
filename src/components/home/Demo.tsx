import React from 'react';
import CreateProject from './CreateProject';

type Props = {};

const Demo = (props: Props) => {
  return (
    <>
      <div className='mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:h-screen lg:grid-cols-2'>
          <div className='relative z-10 lg:py-16'>
            <div className='relative h-64 sm:h-80 lg:h-full'>
              <img
                alt='House'
                src='https://i.ibb.co/s6VGmct/Screenshot-2023-02-02-5-11-01-PM.png'
                className='absolute inset-0 h-full w-full rounded-md object-cover'
              />
            </div>
          </div>

          <div className='relative flex items-center bg-gray-600'>
            <span className='hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-600'></span>

            <div className='p-8 sm:p-16 lg:p-24'>
              <h2 className='text-2xl text-gray-50 pb-4 font-semibold sm:text-3xl'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore, debitis.
              </h2>

              <p className='mt-4 text-gray-50 pb-4'>
                With BuildSmart, you can experience your outdoor spaces in a
                whole new way. Our cutting-edge platform allows you to create
                visualization points to see how buildings and other structures
                obstruct your view. Whether you're a city planner, landscape
                designer, or real estate developer, our 3D visualization tools
                give you the power to make informed decisions and bring your
                projects to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
