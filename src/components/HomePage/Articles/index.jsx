import Image from 'next/image'
import React from 'react'
import { MdDone } from 'react-icons/md'
import Section_Img from '../../../assets/Section_Img.png'
import Article1 from "../../../assets/Article-1.png";
import Article2 from "../../../assets/Article-2.png";
import Article3 from "../../../assets/Article-3.png";
import { SiAltiumdesigner } from 'react-icons/si'
import { BiCustomize } from 'react-icons/bi';

const Articles = () => {
  return (
    <div className='max-w-7xl mx-auto px-5 mt-10'>
      <div className='md:flex gap-20 justify-between items-center'>
        <div data-aos='fade-up-right' className=' max-w-lg'>
          <h3 className='text-3xl font-semibold mb-5'>
            Search for <br /> jobs
          </h3>
          <p className='leading-loose'>
            To start searching for jobs, you can attend job fairs online or in
            person, use job boards and career websites or reach out directly to
            recruiters company to broaden your network.
          </p>
          <div className='flex flex-col gap-5 mt-8'>
            <div className='flex items-center gap-2'>
              <span>
                <MdDone />
              </span>
              <p> Bring to the table win-win survival </p>
            </div>
            <div className='flex items-center gap-2'>
              <span>
                <MdDone />
              </span>
              <p>Capitalize on low hanging fruit to identify</p>
            </div>
            <div className='flex items-center gap-2'>
              <span>
                <MdDone />
              </span>
              <p>But I must explain to you how all this </p>
            </div>
          </div>
          <button className='py-2 hover:-translate-y-1 px-4 bg-blue-600 hover:bg-blue-400 duration-300 text-gray-100 mt-10 rounded-md '>
            Discover More
          </button>
        </div>
        <div data-aos='fade-up-left'>
          <Image height={300} width={500} src={Article1} alt='' />
        </div>
      </div>
      <div className='flex flex-col-reverse md:flex-row gap-20 justify-between items-center py-32'>
        <div data-aos='fade-right' className='grow'>
          <Image height={300} width={500} src={Article2} alt='' />
        </div>
        <div data-aos='fade-left' className=' max-w-lg grow-0'>
          <h3 className='text-3xl font-semibold mb-5'>
            Build a good <br /> resume
          </h3>
          <p className='leading-loose'>
            An efficient resume should promote your abilities and include
            tangible accomplishments that are relevant to this job you apply
            for. You should also prepare a cover letter that is concise and
            elaborations on how you can put your skills to use in the
            organization.
          </p>
          <button className='py-2 hover:-translate-y-1 px-4 bg-blue-600 hover:bg-blue-400 duration-300 text-gray-100 mt-10 rounded-md '>
            Discover More
          </button>
        </div>
      </div>
      <div className='md:flex gap-20 justify-between items-center pb-32'>
        <div data-aos='fade-up-right' className=' max-w-lg'>
          <h3 className='text-3xl font-semibold mb-5'>
            Perform during your <br /> interview
          </h3>

          <div>
            <div className='flex justify-center items-center gap-5 my-8'>
              <div className='bg-pink-500 text-gray-50 text-4xl p-3 rounded-full'>
                <SiAltiumdesigner />
              </div>
              <div>
                <h5 className='text-md font-semibold pb-3'>Awesome design</h5>
                <p>Duis aute irute dolor reprehen deril in volu velit.</p>
              </div>
            </div>
            <div className='flex justify-center items-center gap-5'>
              <div className='bg-pink-500 text-gray-50 text-4xl p-3 rounded-full'>
                <BiCustomize />
              </div>
              <div>
                <h5 className='text-md font-semibold pb-3'>Easy Customize</h5>
                <p>Duis aute irute dolor reprehen deril in volu velit.</p>
              </div>
            </div>
          </div>
          <button className='py-2 hover:-translate-y-1 px-4 bg-blue-600 hover:bg-blue-400 duration-300 text-gray-100 mt-10 rounded-md '>
            Discover More
          </button>
        </div>
        <div data-aos='fade-up-left'>
          <Image height={300} width={500} src={Article3} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Articles
