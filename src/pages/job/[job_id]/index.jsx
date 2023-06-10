import Job_Logo from '../../../assets/upwork.jpg'
import Logo from '../../../assets/LOGO.jpg'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Icons
import { IoLocationOutline } from 'react-icons/io5'
import { HiOutlineCash } from 'react-icons/hi'
import { GiSandsOfTime } from 'react-icons/gi'
import { AiOutlineUser } from 'react-icons/ai'
import { MdAccessTime } from 'react-icons/md'
import { RiCoinsLine } from 'react-icons/ri'
import { ImLocation } from 'react-icons/im'
import { TbCash } from 'react-icons/tb'
import {
  BsBookmark,
  BsCalendar2Date,
  BsFillBriefcaseFill,
} from 'react-icons/bs'
import ApplyModal from '@/components/Modal/ApplyModal'

const JobDescription = () => {
  const [openModal,setOpenModal] = useState(false)
  return (
    <>
      <div className='max-w-7xl mx-auto pb-20'>
        <nav className='flex justify-between mt-5 mx-5 md:mx-0 items-center'>
          <Link href='/'>
            <Image src={Logo} alt='logo' height={50} />
          </Link>
          <Link href='/contact-us'>
            <button className='bg-blue-700 hover:bg-blue-400 duration-300  rounded-lg text-gray-50 px-5 py-2'>
              Contact Us
            </button>
          </Link>
        </nav>
        <section className='bg-blue-50 mt-16 px-10 py-10 md:flex justify-between items-center'>
          <div className='md:flex gap-5 items-start md:mb-0 mb-8'>
            <div className='mt-2 mb-5 md:mb-0'>
              <Image  className='h-20 w-20 rounded-lg' src={Job_Logo} alt='Job Logo' />
            </div>
            <div>
              <h2 className='text-xl font-medium'>
                Software Engineer (Android), Libraries
              </h2>
              <div className='flex flex-wrap gap-5 items-center my-4 text-gray-500 font-medium'>
                <div className=' flex items-center gap-2'>
                  <span>
                    <BsFillBriefcaseFill />
                  </span>
                  <span>Segment</span>
                </div>
                <div className=' flex items-center gap-2'>
                  <span>
                    <ImLocation />
                  </span>
                  <span>London, UK</span>
                </div>
                <div className=' flex items-center gap-2'>
                  <span>
                    <MdAccessTime />
                  </span>
                  <span>11 hours ago</span>
                </div>
                <div className=' flex items-center gap-2'>
                  <span>
                    <HiOutlineCash />
                  </span>
                  <span>$35k-$45k</span>
                </div>
              </div>
              <div className='flex gap-4 items-center mt-2'>
                <span className='bg-blue-300 py-0.5 px-4 rounded-full text-blue-600 font-medium text-sm'>
                  Full Time
                </span>
                <span className='bg-green-300 py-0.5 px-4 rounded-full text-green-700 font-medium text-sm'>
                  Privet
                </span>
                <span className='bg-yellow-300 py-0.5 px-4 rounded-full text-yellow-700 font-medium text-sm'>
                  Urgent
                </span>
              </div>
            </div>
          </div>
          <div
            className='flex
         items-center gap-5'
          >
            <button
            onClick={()=>setOpenModal(true)}
              className='bg-blue-700 hover:bg-blue-400 duration-300 rounded-lg text-gray-50 px-5 py-2 '>
              Apply for Job
            </button>
            <span className='bg-blue-200  cursor-pointer hover:bg-blue-400 hover:text-gray-50 duration-300 py-2.5 px-2 rounded text-blue-600 font-bold'>
              <BsBookmark />
            </span>
          </div>
        </section>
        <section className='mt-10 mx-10 md:flex justify-between gap-20 items-start'>
          <div className='md:w-2/3'>
            <h3 className='text-xl pb-5 font-medium'>Job Description</h3>
            <p className=' leading-8'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
              fugit ipsam dicta, non suscipit sed, iste eaque saepe est dolorum
              modi ipsa perspiciatis? Illo illum nam provident consequatur sequi
              commodi molestiae labore expedita. Ducimus cumque culpa veniam
              quam aliquid dolorem, eius autem laboriosam voluptates hic earum
              sapiente dolore unde nisi aliquam, quas esse ut soluta? Aut
              aliquid, pariatur rem, tempore illo ratione culpa illum
              doloremque, sed exercitationem nemo id adipisci iure quas
              laboriosam ea vero. Quia praesentium tempore cumque veniam.
            </p>
            <h3 className='text-xl py-5 font-medium'>Key Responsibilities</h3>
            <ul className='list-disc ml-5 leading-10'>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusamus minus enim vitae placeat iste commodi.
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                cupiditate?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                facere blanditiis voluptatum corporis laborum. Dignissimos.
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
                cum?
              </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                asperiores, maxime numquam unde nobis ex labore doloremque in,
                officia, totam vel!
              </li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
            <h3 className='text-xl py-5 font-medium'>Skill & Experience</h3>
            <ul className='list-disc ml-5 leading-10'>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusamus minus enim vitae placeat iste commodi.
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                cupiditate?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                facere blanditiis voluptatum corporis laborum. Dignissimos.
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
                cum?
              </li>
            </ul>
          </div>
          <div className='md:w-1/3 bg-blue-50 p-8 rounded-lg shadow-lg'>
            <h3 className='text-xl font-medium pb-3'>Job Overview</h3>
            <div className='flex items-start gap-3 mb-5'>
              <div className='mt-1.5 text-blue-500 text-lg'>
                <BsCalendar2Date />
              </div>
              <div>
                <p> Date Posted:</p>
                <p> Posted 1 hours ago</p>
              </div>
            </div>
            <div className='flex items-start gap-3 mb-5'>
              <div className='mt-1.5 text-blue-500 text-xl'>
                <GiSandsOfTime />
              </div>
              <div>
                <p>Expiration date:</p>
                <p> April 06, 2021</p>
              </div>
            </div>
            <div className='flex items-start gap-3 mb-5'>
              <div className='mt-1.5 text-blue-500 text-xl'>
                <IoLocationOutline />
              </div>
              <div>
                <p> Location:</p>
                <p> London, UK</p>
              </div>
            </div>
            <div className='flex items-start gap-3 mb-5'>
              <div className='mt-1.5 text-blue-500 text-xl'>
                <AiOutlineUser />
              </div>
              <div>
                <p> Job Title:</p>
                <p> Designer</p>
              </div>
            </div>
            <div className='flex items-start gap-3 mb-5'>
              <div className='mt-1.5 text-blue-500 text-xl'>
                <MdAccessTime />
              </div>
              <div>
                <p> Hours:</p>
                <p> 50k/ week</p>
              </div>
            </div>
            <div className='flex items-start gap-3 mb-5'>
              <div className='mt-1.5 text-blue-500 text-2xl'>
                <RiCoinsLine />
              </div>
              <div>
                <p> Rate:</p>
                <p> $15-$25/hour</p>
              </div>
            </div>
            <div className='flex items-start gap-3 mb-5'>
              <div className='mt-1.5 text-blue-500 text-xl'>
                <TbCash />
              </div>
              <div>
                <p> Salary:</p>
                <p> $35k-$45k</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ApplyModal setOpenModal={setOpenModal} openModal={openModal} />
    </>
  )
}

export default JobDescription
