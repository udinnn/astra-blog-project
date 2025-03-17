import React from 'react'

const Menu = () => {
  return (
    <div className='relative justify-end w-48 border border-black rounded-sm bg-gray-300 p-4 shadow-lg z-10'>
        <ul className='absolute inset-0 list-none p-0 m-0 z-10'>
          <li className='p-2 mb-2 border border-black rounded-sm bg-gray-300 shadow-md'>Home</li>
          <li className='p-2 mb-2 border border-black rounded-sm bg-gray-300 shadow-md'>About Us</li>
          <li className='p-2 mb-2 border border-black rounded-sm bg-gray-300 shadow-md'>Articles</li>
        </ul>
    </div>
  )
}

export default Menu