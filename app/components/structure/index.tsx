'use client';

import Image from "next/image";
import structure from '@/public/images/structure.png';

type Props = {}

const Structure = (props: Props) => {
  return (
    <div className="mx-auto w-5/6">
        {/* Heading */}
        <div className="flex justify-center items-center pb-8">
          <h1 className="text-lg md:text-3xl font-bold underline underline-offset-8">
            Organization <span className='text-accent-orange'>Structure</span> 
          </h1>
        </div>
        {/* end */}
        {/* image */}
        <div className="h-[20vh] md:h-[60vh] relative">
            <Image
             src={structure}
             alt="structure"
             fill
             className="object-contain"
             />
        </div>
        {/* end */}
    </div>
  )
}

export default Structure