'use client';

import Image from 'next/image';
import contact from '@/public/images/contact.jpg';

type Props = {}

const Contact = (props: Props) => {
    const inputStyles =
    "w-full rounded-lg bg-alice-blue px-5 py-3 placeholder-gray-500 mb-5 transition duration-300 focus:bg-accent-white outline-none border-solid focus:border-2 border-accent-gray";
  return (
    <div id='contactus' className='pt-8 mx-auto w-5/6'>
          {/* Heading */}
          <div className="flex justify-center items-center pb-8">
          <h1 className="text-lg md:text-3xl font-bold underline underline-offset-8">
            Contact <span className='text-accent-orange'>Us</span> 
          </h1>
        </div>
        {/* content */}
        <div className="flex md:flex-row flex-col items-start justify-center py-8">
          {/* content */}
          <div className="content md:basis-3/5">
           <form action="">
            <input type="text" className={inputStyles} placeholder='Enter your name' />
            <input type="email" className={inputStyles} placeholder='Enter your email' />
            <textarea rows={7} cols={90} className={inputStyles} placeholder='Give us your feedback'/>
            <button
                type="submit"
                className="mt-5 rounded-lg bg-accent-orange px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
           </form>
          </div>
          {/* image */}
          <div className="image hidden md:flex pt-4 md:basis-3/5 md:ml-40 md:justify-items-end h-[300px]">
            <Image
              src={contact}
              alt="mission"
              width={500}
              height={200}
              className="object-cover rounded-md"
            />
          </div>
        </div>
        {/* end */}
    </div>
  )
}

export default Contact