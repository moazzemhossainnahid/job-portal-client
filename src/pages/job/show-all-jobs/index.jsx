import JobCart from '@/components/common/JobCart'
import React from 'react'

 const ShowAllJobs = () => {
  return (
    <div className='pb-28'>
      <h1 className=' bg-blue-100 text-3xl text-center py-10 font-medium'>
        Find Your Job
      </h1>
      {/* Job Cart */}
      <div className='max-w-7xl mx-auto my-16'>
        <div className='grid  md:grid-cols-3 px-10 md:px-0 gap-10'>
          <JobCart />
          <JobCart />
          <JobCart />
          <JobCart />
          <JobCart />
          <JobCart />
          <JobCart />
          <JobCart />
          <JobCart />
          <JobCart />
          <JobCart />
          <JobCart />
        </div>
      </div>

     
    </div>
  )
 }
export default ShowAllJobs
