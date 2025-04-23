import React from 'react';

const page = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-slate-800'>
      <div className='flex flex-col justify-center items-center bg-slate-300 h-min-content rounded-lg p-4'>
        {/* SVG Unauthorized Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="red"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="m-2"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>

        <h1 className='font-bold text-4xl'>UNAUTHORIZED</h1>
        <p className='text-lg mt-4'>You are not authorized to access this page.</p>
        <p className='text-lg mt-4'>Please contact the administrator.</p>
        <p className='text-lg mt-4'>
          Back to{' '}
          <span>
            <a href='/' className='underline hover hover:text-blue-600'>
              home
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default page;