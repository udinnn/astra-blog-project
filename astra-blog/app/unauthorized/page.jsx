import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-slate-800'>
        <div className='flex flex-col justify-center items-center bg-slate-300 h-min-content rounded-lg p-4'>
            <Image
            src='/assets/unauthorized.png'
            width={100}
            height={100}
            alt='unauthorized'
            className='m-2'
            />
            <h1 className='font-bold text-4xl'>UNAUTHORIZED</h1>
            <p className='text-lg mt-4'>You are not authorized to access this page.</p>
            <p className='text-lg mt-4'>Please contact the administrator.</p>
            <p className='text-lg mt-4'>Back to <span><a href='/' className='underline hover hover:text-blue-400'>home</a></span></p>
        </div>
    </div>
  )
}

export default page
