import Image from 'next/image'
import React from 'react'
import JobImg from '../../../assets/upwork.jpg'
import { IoLocationOutline } from 'react-icons/io5'
import Link from 'next/link'

const JobCart = () => {
  return (
    <Link href='/job/job-details' className='border duration-300 rounded-md w-full py-3 pr-3 hover:bg-blue-50 cursor-pointer hover:-translate-y-1'>
      {/* First Section */}
      <div className='flex justify-between'>
        <div>
          <span className='bg-green-300 py-0.5 px-4 rounded-r-full text-green-700 font-medium text-sm'>
            {' '}
            Privet
          </span>
          <br />
          <span className='bg-yellow-300 py-0.5 px-4 rounded-r-full text-yellow-700 font-medium text-sm'>
            {' '}
            Urgent
          </span>
        </div>
        <div>
          <span className='bg-blue-300 py-0.5 px-4 rounded-full text-blue-600 font-medium text-sm'>
            Ful time
          </span>
        </div>
      </div>

      {/* Img Section */}
      <div>
        <Image
          className='rounded-full h-20 w-20 mx-auto -mt-3'
          src={JobImg}
          alt='job Img'
        />
      </div>
      {/* Info section */}
      <div className='text-center'>
        <h6 className='my-2 text-sm text-green-500 font-medium'>Upwork</h6>
        <h3 className='text-xl font-medium'>
          Software Engineer (Android), Libraries
        </h3>
        <div className='my-5 flex justify-center items-center gap-3 text-gray-500 text-sm font-medium'>
          {' '}
          <span>
            <IoLocationOutline />
          </span>{' '}
          London, UK
        </div>
        <div className='flex justify-center gap-5 items-center'>
          <span className='bg-blue-100 text-gray-500 px-4 py-0.5 rounded-full'>
            App
          </span>
          <span className='bg-blue-100 text-gray-500 px-4 py-0.5 rounded-full'>
            Design
          </span>
          <span className='bg-blue-100 text-gray-500 px-4 py-0.5 rounded-full'>
            Digital
          </span>
        </div>
        <div className='mt-5 mb-10'>
          <span className='bg-blue-600 text-gray-50 px-3 py-0.5 rounded-full'>
            +2
          </span>
        </div>
      </div>
    </Link>
  )
}

export default JobCart
