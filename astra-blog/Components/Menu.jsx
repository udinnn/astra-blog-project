import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

const Menu = () => {
  const router = useRouter();
  const toggleHome = () => {
    router.push('/');
  };
  const toggleAbout = () => {
    router.push('/about');
  };
  const toggleArticles = () => {
    router.push('/article');
  };

  return (
    <div className='relative flex flex-row justify-end items-center p-2 z-0'>
      <div className='absolute flex flex-col justify-center items-center w-auto h-min-content border border-black right-4 top-4 z-10'>
        <ul>
          <li>
            <Image 
            src="/assets/home.png" 
            alt="home" 
            width={20} 
            height={20} 
            className="my-4 cursor-pointer"
            onClick={toggleHome}
            title='Home'
            />
          </li>
          <li>
          <Image 
            src="/assets/about.png" 
            alt="about" 
            width={20} 
            height={20} 
            className="my-4 cursor-pointer"
            onClick={toggleAbout}
            title='About'
            />
          </li>
          <li>
          <Image 
            src="/assets/articles.png" 
            alt="articles" 
            width={20} 
            height={20} 
            className="my-4 cursor-pointer"
            onClick={toggleArticles}
            title='Articles'
            />
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Menu