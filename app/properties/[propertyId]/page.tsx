"use client"
import React from 'react'
import { useParams } from 'next/navigation';
import { properties } from '..'; 
import Nav from '../navbar';
import Footer from '@/app/footer';
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

const Property = (props: Props) => {
    const params = useParams();
    const id = params.propertyId;
    const property = properties.find((p) => p.id === parseInt(id))
    if(!property){
        return <div>Property not found!</div>
    }
  return (
    <div>
        <Nav />
        <div className="md:flex justify-between items-start pt-28 gap-8 mb-4 w-5/6 mx-auto">
            {/* image */}
            <div className='basis-1/2 relative w-auto h-72 sm:h-[60vh]'>
                <Image
                fill
                src={property?.image}
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
                <h1 className='font-bold text-xl text-accent-orange'>{property?.name}</h1>
                <p>Ksh <span className='text-accent-gray font-extrabold'>{property?.price}</span> </p>
                <p className='text-accent-black'>{property?.longDescription}</p>
                <Link className='bg-accent-orange text-accent-black rounded-sm py-1 px-4 w-fit hover:bg-orange-400' href="/properties">Back</Link>
            </div>
            {/* end */}
        </div>
        <Footer/>
    </div>
  )
}

export default Property