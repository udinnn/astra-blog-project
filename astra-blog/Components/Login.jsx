import React from 'react'

const Login = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className='flex flex-col justify-center items-center w-auto h-min-content bg-gray-200 border shadow-lg p-2'>
        <h1 className='text-2xl font-bold'>Login</h1>
        <input type='text' placeholder='Username' className='border border-gray-300 p-1 rounded-lg my-2' />
        <input type='password' placeholder='Password' className='border border-gray-300 p-1 rounded-lg my-2' />
        <button className='bg-blue-500 text-white p-1 rounded-lg my-2'>Login</button>
      </div>
    </div>
  )
}

export default Login