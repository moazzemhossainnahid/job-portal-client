import Hero_Section from '../../../assets/hero_main.png'
import Marker from '../../../assets/mark-heading.webp'
import Left_Shap from '../../../assets/shap.webp'
import Logo from '../../../assets/LOGO.jpg'
import HowItWork from '../HowItWork'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <>
      <div className='bg-gray-100 pb-10'>
        {/* desktop */}
        <div className='relative hidden md:block'>
          {/* Shaps */}
          <div className=' absolute top-44 z-50'>
            <Image src={Left_Shap} alt='Shap' />
          </div>

          <div className='flex max-w-7xl px-5 mx-auto items-center'>
            <div className='w-2/3 relative pl-5 md:pl-0'>
              <Link href='/' className=' absolute -top-72'>
                <Image src={Logo} alt='logo' height={50} />
              </Link>
              <div className=' absolute top-16 left-[180px]'>
                <Image src={Marker} alt='Shap' height={18} />
              </div>
              <div className='h-[100px] w-[100px] rounded-full bg-green-700  opacity-25 absolute -top-28 left-[250px]'></div>
              <h1 className='text-5xl font-semibold leading-relaxed z-10 mb-10 '>
                We find the best <br /> jobs for you{' '}
              </h1>
              <p className='text-gray-400 text-normal font-medium leading-loose'>
                Fill your job in hours, not weeks. Search for free.
              </p>
              <div className='relative'>
                <p className='text-gray-600 text-normal font-medium leading-loose'>
                  Popular Searches: Data Scientist, UX design{' '}
                </p>
                <div className='h-[150px] w-[150px] rounded-full bg-green-700  opacity-25 absolute top-28 left-[30px]'></div>
                <div className='h-[200px] w-[200px] rounded-full bg-[#FFD75D] absolute  opacity-50 top-56 left-[450px]'></div>
              </div>
            </div>
            <div className='-mr-[20rem] relative'>
              <Image className='-z-50' src={Hero_Section} alt='Hero Image' />
              <Link href='/contact-us'>
                <button className='bg-blue-700 hover:bg-blue-400 duration-300 absolute top-3 rounded-lg text-gray-50 px-5 py-2 right-80'>
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className=' md:hidden '>
          <div className='flex justify-between py-0.5 items-center px-5 bg-slate-200'>
            <Link href='/' className='  '>
              <Image src={Logo} alt='logo' height={50} />
            </Link>

            <Link href='/contact-us'>
              <button className='bg-blue-700 hover:bg-blue-400 duration-300  rounded-lg text-gray-50 px-5 py-2 right-80'>
                Contact Us
              </button>
            </Link>
          </div>
          <div className=''>
            <Image src={Hero_Section} alt='Hero Image' />
          </div>

          {/* Shaps */}
          <div className='h-[100px] w-[100px] rounded-full bg-green-700  opacity-25 absolute top-5 left-[250px]'></div>
          <div className='h-[200px] w-[200px] rounded-full bg-[#FFD75D]  opacity-50 absolute  bottom-80 -left-[50px]'></div>
          <div className='h-[150px] w-[150px] rounded-full bg-green-700  absolute  opacity-50 top-64 right-[5px]'></div>

          <div className='  mx-auto absolute top-20 '>
            <div className=' pl-5 md:pl-0'>
              <h1 className='text-3xl font-semibold leading-relaxed z-10 mb-8 '>
                We find the best <br /> jobs for you{' '}
              </h1>
              <p className='text-gray-500 text-normal font-medium leading-loose'>
                Fill your job in hours, not weeks. Search for free.
              </p>
              <div className='relative'>
                <p className='text-gray-700 text-normal font-medium leading-loose'>
                  Popular Searches: Data Scientist, UX design{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
        <HowItWork />
      </div>
    </>
  )
}

export default HeroSection
