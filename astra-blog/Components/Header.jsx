import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='flex flex-row justify-around items-center border-b border-black text-black py-4'>
        <h1 className='text-2xl font-bold items-start mr-4'>Company Logo</h1>
        <nav>
          <ul className='flex flex-row justify-around items-center'>
            <li 
            className='mx-2  hover:bg-blue-500'
            >
              <Link href='/'>
                Home
              </Link>
            </li>
            <li className='mx-2  hover:bg-blue-500'>
            <Link href='/about'>
                About
              </Link>
            </li>
            <li className='mx-2  hover:bg-blue-500'>
            <Link href='/article'>
                Articles
              </Link>
            </li>
          </ul>
        </nav>
        <div className='flex flex-row justify-around items-end ml-4'>
          <input type='text' placeholder='Search...' className='border border-gray-300 p-1 rounded-lg' />
          <button className='bg-blue-500 text-white p-1 rounded-lg ml-2'>Search</button>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-around items-center mt-5 mx-20">
        <div className="flex flex-col justify-center text-start">
          <p>This is Company Headline</p>
          <h1 className="font-bold text-3xl mb-20 py-2">Company Name</h1>
          <p>This is Company Vision</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/assets/building.jpg"
            alt="Company Logo"
            width={400}
            height={400}
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  )
}

export default Header