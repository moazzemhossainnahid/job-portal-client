import TouchImg from '../../../assets/Section_Img.png'
import { HiOutlinePhoneMissedCall } from 'react-icons/hi'
import { BiTimeFive } from 'react-icons/bi'
import { ImLocation } from 'react-icons/im'
import Image from 'next/image'
import React from 'react'

const GetInTouch = () => {
  return (
    <div className='md:flex justify-center items-center gap-16 max-w-7xl mx-auto px-10 md:px-0'>
      <div className='md:w-1/2 relative'>
        <h2 className='text-2xl font-semibold'>Get in touch</h2>
        <div className='w-12 h-1 mt-2 ml-3 bg-black'></div>
        <p className='my-5 leading-8'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
          accusamus quod error corporis asperiores illo, unde est! Nam numquam
          sed cupiditate repellat debitis eaque sit similique.
        </p>
        <ul className='flex flex-col gap-2.5'>
          <li className='flex gap-2 items-center'>
            {' '}
            <span className='text-red-600'>
              <ImLocation />
            </span>{' '}
            457 BlgBlue Street, NY 10013
          </li>
          <li className='flex gap-2 items-center'>
            {' '}
            <span className='text-red-600'>
              <ImLocation />
            </span>{' '}
            998 Some Street, LA 10013
          </li>
          <li className='flex gap-2 items-center'>
            {' '}
            <span className='text-red-600'>
              {' '}
              <ImLocation />
            </span>{' '}
            457 BlgBlue Street, NY 100143
          </li>
          <li className='flex gap-2 items-center'>
            {' '}
            <span className='text-red-600'>
              {' '}
              <HiOutlinePhoneMissedCall />
            </span>{' '}
            +44 300 303 0266{' '}
          </li>
          <li className='flex gap-2 items-center'>
            {' '}
            <span className='text-red-600'>
              <BiTimeFive />
            </span>{' '}
            Mon-Sat 8.00-18.00
          </li>
        </ul>
      </div>
      <div className='md:w-1/2 my-10 md:my-0'>
        <Image src={TouchImg} alt='' />
      </div>
    </div>
  )
}

export default GetInTouch
