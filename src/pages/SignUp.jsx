import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='w-full h-screen'>
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[650px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className='w-full flex flex-col py-4'
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-3 my-2 bg-neutral-700 rounded placeholder:text-neutral-400'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                  required={true}
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='p-3 my-2 bg-neutral-700 rounded placeholder:text-neutral-400'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                  required={true}
                  minLength='6'
                  pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                  title='Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters'
                />
                <button className='bg-red-600 py-3 my-6 rounded font-bold hover:bg-red-700 ease-in-out duration-500'>
                  Sign Up
                </button>
                <div className='flex justify-between items-center text-sm text-gray-400'>
                  <p>
                    <input
                      className='mr-2 h-4 w-4 align-center'
                      type='checkbox'
                    />
                    Remember Me
                  </p>
                  <p className='cursor-pointer'>
                    <a href='/signup'>Need help?</a>
                  </p>
                </div>
                <p className='mt-20 mb-2'>
                  <span className='text-neutral-500 mr-2'>
                    Already have an account?
                  </span>
                  <Link to='/login'>Sign in now.</Link>
                </p>
                <p>
                  <span className='text-neutral-500 text-sm mr-1'>
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot.
                  </span>
                  <Link to='/signup' className='text-blue-500 text-sm'>
                    Learn more.
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
