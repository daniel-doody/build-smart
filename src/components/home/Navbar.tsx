import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className='bg-gray-900 h-20 shadow-md flex px-20 justify-between'>
      {/* LOGO */}
      <div className='flex items-center '>
        <h1 className='text-amber-500 text-2xl font-semibold font-sans'>
          Build Smart
        </h1>
      </div>

      {/* BUTTONS */}
      <div className='flex my-auto'>
        <button className='text-white py-2 hover:scale-105 pr-6'>
          Sign In
        </button>
        <button className='text-white bg-amber-500 hover:bg-amber-400 rounded-md shadow-sm py-3 px-8 hover:scale-105 '>
          Create Project
        </button>
      </div>
    </div>
  );
};

export default Navbar;
