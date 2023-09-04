'use client'
import Footer from '@/app/footer'
import { designs } from '@/app/properties/Design'
import Nav from '@/app/properties/navbar'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

type Props = {}

const DesignDetailsPage = (props: Props) => {
    const params = useParams();
    const id = params.designId;
    const design = designs.find((d) => d.id === parseInt(id))
    if(!design){
        return <div>Design not Found!</div>
    }
  return (
    <div>
        <Nav/>
        <div className="md:flex justify-between items-start pt-28 gap-8 mb-4 w-5/6 mx-auto">
            {/* image */}
            <div className='basis-1/2 relative w-auto h-[60vh]'>
                <Image
                fill
                src={design?.image}
                alt='propertyImg'
                style={{objectFit: "cover", borderRadius: "10px"}}
                sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw"
                />
            </div>
            {/* end */}
            {/* description */}
            <div className='flex flex-col basis-1/2 gap-2 mt-6'>
                <h1 className='font-bold text-xl text-accent-orange'>{design?.name}</h1>
                <p>Ksh <span className='text-accent-gray font-extrabold'>{design?.price}</span> </p>
                <p className='text-accent-black'>{design?.longDescription}</p>
                <Link className='bg-accent-orange text-accent-black rounded-sm py-1 px-4 w-fit hover:bg-orange-400' href="/properties">Back</Link>
            </div>
            {/* end */}
        </div>
        <Footer/>
    </div>
  )
}

export default DesignDetailsPage