import React from 'react'
import { BsArrowRightCircle, BsArrowRightCircleFill } from 'react-icons/bs'

const HowItWork = () => {
  return (
    <div className='mt-28 max-w-7xl mx-auto'>
      <p className='text-gray-500 font-semibold text-center'>
        {' '}
        Trusted by the world{`'`}s leading companies
      </p>
      <ul className='md:flex text-center leading-relaxed justify-center items-center gap-10 mt-10 md:mb-28 mb-10 text-3xl text-gray-500'>
        <li>coinbase</li>
        <li className='italic'>shopify</li>
        <li className='font-bold'>attentive</li>
        <li className='italic'>webflow</li>
        <li className='font-bold'>strip</li>
        <li>upwork</li>
      </ul>
      <h2 className=' text-center text-3xl my-5 font-semibold'>How it work</h2>
      <p className=' text-gray-500 text-center px-5'>
        Explore the following these steps will help you to find a job easily
      </p>
      {/* Dextop */}
      <div className='my-10 mb-20 hidden md:flex items-center justify-around'>
        <div className='text-center'>
          <span className='bg-blue-500 text-gray-50 text-5xl py-1.5 px-5 rounded-full'>
            1
          </span>
          <h3 className='mt-4 mb-2'>Register Account</h3>
          <p>First, you need to make an account</p>
        </div>
        <div className='text-4xl text-green-700 cursor-pointer hover:translate-x-2 duration-300'>
          <BsArrowRightCircleFill />
        </div>
        <div className='text-center'>
          <span className='bg-blue-500 text-gray-50 text-5xl py-1.5 px-5 rounded-full'>
            2
          </span>
          <h3 className='mt-4 mb-2'>Register Account</h3>
          <p>First, you need to make an account</p>
        </div>
        <div className='text-4xl text-green-700 cursor-pointer hover:translate-x-2 duration-300'>
          <BsArrowRightCircleFill />
        </div>
        <div className='text-center'>
          <span className='bg-blue-500 text-gray-50 text-5xl py-1.5 px-5 rounded-full'>
            3
          </span>
          <h3 className='mt-4 mb-2'>Register Account</h3>
          <p>First, you need to make an account</p>
        </div>
      </div>
      {/* Mobile */}
      <div className='my-10 mb-20 flex flex-col gap-10 md:hidden'>
        <div className='text-center'>
          <span className='bg-blue-500 text-gray-50 text-5xl py-1.5 px-5 rounded-full'>
            1
          </span>
          <h3 className='mt-4 mb-2'>Register Account</h3>
          <p>First, you need to make an account</p>
        </div>
       
        <div className='text-center'>
          <span className='bg-blue-500 text-gray-50 text-5xl py-1.5 px-5 rounded-full'>
            2
          </span>
          <h3 className='mt-4 mb-2'>Register Account</h3>
          <p>First, you need to make an account</p>
        </div>
    
        <div className='text-center'>
          <span className='bg-blue-500 text-gray-50 text-5xl py-1.5 px-5 rounded-full'>
            3
          </span>
          <h3 className='mt-4 mb-2'>Register Account</h3>
          <p>First, you need to make an account</p>
        </div>
      </div>
    </div>
  )
}

export default HowItWork
