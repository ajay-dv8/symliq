// components/ContactPage.js
"use client";
import { useRouter } from 'next/navigation';
import React from 'react'; 
import { HiMiniArrowUturnLeft } from 'react-icons/hi2';
 
// const blinkedin = '/path/to/linkedin.png';
// const bfb = '/path/to/facebook.png';
// const bgit = '/path/to/github.png';
 
export const ContactPage = () => {

  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // Navigate to the previous page
  };

  return (
    <div className='w-full h-screen bg-teal grid place-items-center p-5 md:p-20 overflow-hidden'>
      <div className='w-full h-full bg-colorLight shadow-xl flex flex-col justify-center items-center'>

        <button onClick={handleGoBack} className="relative left-[45%] md:left-[47%]  top-[-25%] z-50">
          <HiMiniArrowUturnLeft className="~text-3xl/4xl text-colorDark  hover:text-teal " />
        </button>

        <span className='font-semibold text-2xl text-colorDark'>Contact Us</span>

        <a href='mailto:info@symliq.com' className='text-colorDark font-bold text-xl md:text-6xl transition-all ease-in-out duration-700 my-10 hover:text-teal'>
          support@symliq.com
        </a>

        <div className='m-4 flex flex-col justify-center items-center'>
          <span className='text-colorDark font-bold transition-all ease-in-out duration-700 hover:text-teal text-lg'>
            Call line 
          </span>
          <a href='tel:+233248574526' id='call_btn'>CALL: +233 24 857 4526</a>
        </div>

        <div className='relative bottom-[-5rem] flex flex-col items-center font-semibold'>
          <span className='m-4'>SOCIAL</span>
          <div className='flex flex-row'>
            <div className='contact_social_icon'>
              {/* <Social_link 
                socialMedia='LinkedIn'
                link=''
                image={blinkedin}
              /> */}
            </div>
            <div className='contact_social_icon'>
              {/* <Social_link 
                socialMedia='Facebook'
                link=''
                image={bfb}
              /> */}
            </div>
            <div className='contact_social_icon'>
              {/* <Social_link 
                socialMedia='Github'
                link='https://github.com/ajay-dv8'
                image={bgit}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
