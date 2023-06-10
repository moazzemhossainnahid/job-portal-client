import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-7xl mx-auto md:flex items-center'>
      <div className='md:w-1/2 mt-16 mx-10 md:mx-0'>
        <h4 className='text-xl font-medium text-blue-700'>Contact Us</h4>
        <div className='w-16 h-0.5 mt-1 ml-3 mb-3  bg-black'></div>
        <h1 className='md:text-4xl text-3xl font-medium leading-relaxed'>
          Are You Interested In <br /> Online Learning? <br /> Contact Us.
        </h1>
        <p className='mt-10 leading-loose'>
          Contact our top-notch educationalist in <br /> the UK that has huge
          expertise in <br /> providing futuristic solutions all aspiring <br />{' '}
          students coming for higher education.
        </p>
        <p className='mt-5 text-lg font-medium text-gray-500 mb-1'>
          Brayden Backham
        </p>
        <p>Director</p>
      </div>

      <div className='md:w-1/2 mx-10 md:mx-0'>
        <form className=' shadow-xl max-w-md bg-slate-50 p-8 md:-mt-28 z-10'>
          <h1 className='text-4xl font-medium mb-5'>
            Fill Out For <br /> Contact
          </h1>

          <p>
            Fill-in the contact form and get immediate assistance from our
            educational consultant.
          </p>

          <div className='my-6'>
            <input
              type='text'
              className='shadow-sm bg-gray-50 border-4 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
              placeholder='Your full name'
              required
            />
          </div>
          <div className='mb-6'>
            <input
              type='email'
              className='shadow-sm bg-gray-50 border-4 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
              placeholder='example@example.com'
              required
            />
          </div>
          <div className='mb-6'>
            <input
              type='text'
              className='shadow-sm bg-gray-50 border-4 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
              placeholder='Subject'
              required
            />
          </div>
          <div className='mb-6'>
            <textarea
              rows='4'
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50  border-4 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder=' Write  Your message'
              required
            ></textarea>
          </div>

          <button
            type='submit'
            className='border px-5 py-2 duration-300 hover:bg-blue-500 bg-blue-700 text-gray-50'
          >
            SEND NOW
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
