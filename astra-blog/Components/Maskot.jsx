import Image from 'next/image'
import React from 'react'

const Maskot = () => {
  return (
    <div>
      <div className='fixed bottom-0 right-0 z-50 m-4'>
        <Image
        src="/assets/chatbot.png"
        width={100}
        height={100}
        alt='maskot'
        />
      </div>
    </div>
  )
}

export default Maskot
