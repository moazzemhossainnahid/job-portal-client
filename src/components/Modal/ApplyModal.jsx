import { Button, Modal } from 'flowbite-react'
import React from 'react'
import { useForm } from 'react-hook-form'

const ApplyModal = ({ setOpenModal, openModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
    const onSubmit = (data) => {
      console.log(data)
    // addNewUser(data, refetch, setOpenModal)
  }

  return (
    <React.Fragment>
      <Modal
        show={openModal}
        size='md'
        popup={true}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className=''>
            <h3 className='text-center mb-5 text-xl font-bold text-gray-500 dark:text-gray-400'>
              Apply for this job
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-4'>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-bold text-gray-600 dark:text-white'
                >
                  First name
                </label>
                <input
                  {...register('name', { required: true })}
                  type='text'
                  name='name'
                  id='name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  placeholder='First name'
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-bold text-gray-600 dark:text-white'
                >
                  Last name
                </label>
                <input
                  {...register('name', { required: true })}
                  type='text'
                  name='name'
                  id='name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  placeholder='Last name'
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-bold text-gray-600 dark:text-white'
                >
                  Your email
                </label>
                <input
                  {...register('email', { required: true })}
                  type='email'
                  name='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  placeholder='example@example.com'
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-bold text-gray-600 dark:text-white'
                >
                  Phone number
                </label>
                <input
                  {...register('name', { required: true })}
                  type='text'
                  name='name'
                  id='name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  placeholder='Phone number'
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='resume'
                  className='block mb-2 text-sm font-bold text-gray-600 dark:text-white'
                >
                  Your resume/ portfolio URL
                </label>
                <input
                  {...register('resume', { required: true })}
                  type='text'
                  name='resume'
                  id='resume'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  placeholder='Resume/Portfolio URL'
                  required
                />
              </div>

              <div className='flex justify-between mt-5 mx-1'>
                <Button
                  onClick={() => setOpenModal(false)}
                  type='submit'
                  className='bg-lime-500 hover:bg-lime-600 '
                >
                  Apply
                </Button>
                <Button color='failure' onClick={() => setOpenModal(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
}

export default ApplyModal