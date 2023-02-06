import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

const CreateProject = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});

  // update form object after each keystroke
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  // submit form: send post request to server @ /login
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className='text-white mt-8 text-bold bg-amber-500 hover:bg-amber-400 font-bold rounded-md shadow-sm py-4 px-10 hover:scale-105'
      >
        Create a Project
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        shouldCloseOnOverlayClick={true}
        className='w-2/5 h-4/5 m-auto mt-20 rounded-lg shadow-xl z-20 bg-white border-b-8 border-gray-600'
      >
        <form className='p-12 z-20 relative' onSubmit={handleSubmit}>
          <h1 className='text-2xl font-bold mb-4'>Create a Project</h1>
          <button
            onClick={() => setIsOpen(false)}
            className='absolute text-xl top-4 right-6 text-gray-300 font-extrabold hover:scale-110 hover:text-gray-500'
          >
            X
          </button>
          <div className='mb-4'>
            <label className='block font-medium mb-2' htmlFor='email'>
              Email:
            </label>
            <input
              className='border rounded w-full py-2 px-3'
              type='email'
              placeholder='Email'
              name='email' // the sent object key
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label className='block font-medium mb-2' htmlFor='password'>
              Password:
            </label>
            <input
              className='border rounded w-full py-2 px-3'
              type='password'
              placeholder='Password'
              name='password' // the sent object key
              onChange={handleChange}
            />
          </div>
          <button
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded shadow-sm hover:scale-105 hover:shadow-lg '
            type='submit'
            value='login'
            href='/dashboard'
          >
            Login
          </button>
          {/* DIVIDER */}
          <div className='flex place-content-center pt-8 mb-12 h-10'>
            <div className='flex border-b border-gray-300 w-40' />
            <p className='text-sm text-gray-600 mt-[-3px] font-thin px-4'>OR</p>
            <div className='border-b border-gray-300 w-40' />
          </div>
          {/* OAUTH */}
          <div className='flex place-content-center mt-10 gap-x-12'>
            <div className='flex items-center justify-center w-44 h-14 cursor-pointer rounded-md shadow-md hover:scale-105 hover:shadow-lg bg-gray-900'>
              {/* <img src='../public/github.png' /> */}
              <p className='text-white font-semibold'>GitHub</p>
            </div>

            <div className='flex items-center justify-center w-44 h-14 cursor-pointer rounded-md shadow-md hover:scale-105 hover:shadow-lg border border-gray-50'>
              {/* <img src='../public/github.png' /> */}
              <a href='/auth/google' className='text-black font-semibold'>
                Google
              </a>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CreateProject;
