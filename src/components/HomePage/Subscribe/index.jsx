import React from 'react'
import Footer_Logo from '../../../assets/Footer_Logo.jpeg'
import Image from 'next/image'

const Subscribe = () => {
  return (
    <div className=' border-t-2'>
      <div
        data-aos-delay='800'
        data-aos='flip-left'
        data-aos-duration='1500'
        className='md:flex md:justify-between mx-auto w-full max-w-screen-xl px-5 items-center py-14 '
      >
        <div className=' md:flex items-center gap-10 px-5'>
          <div className='text-center'>
            <Image height={70} width={70} src={Footer_Logo} alt='Footer Logo' />
          </div>
          <div className='py-4'>
            <h3 className='text-2xl font-sana '>Subscribe to our newsletter</h3>
            <p className='text-normal text-gray-500'>
              We{`'`}ll keep you updated with the best new jobs.
            </p>
          </div>
        </div>
        <div
          data-aos-delay='800'
          data-aos-duration='1500'
          data-aos='flip-right'
        >
          <form className=' md:flex gap-4 items-center px-6 md:px-0'>
            <label htmlFor='simple-search' className='sr-only'>
              Search
            </label>
            <div className='w-full'>
              <input
                type='text'
                id='simple-search'
                className='bg-gray-50 md:w-[300px] my-5 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block  w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Enter your email'
                required
              />
            </div>
            <button
              type='submit'
              className='p-2.5 w-full   text-sm font-medium text-white bg-blue-700 rounded-full border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
