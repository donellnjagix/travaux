import React from "react";
import { Attribute } from "../types/types";
import Image from "next/image";

type Props = {
  id: number;
  name: string;
  price: number;
  image: string[]; // This is an array of image strings
  shortDescription: string;
  longDescription?: string;
};

const Card = ({
  id,
  name,
  price,
  image, // image is still an array of strings
  shortDescription,
  longDescription,
}: Props) => {
  return (
    <div className="bg-alice-blue shadow-md p-4 flex items-center justify-center flex-col gap-2 text-center">
      <div className="relative h-60 w-full">
        {/* Map over the array of image strings and render each image */}
        {image.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={name} // You can use the same alt text for all images or customize it
            fill
            sizes="(max-width: 480px) 100vw,
                    (max-width: 768px) 75vw,
                    (max-width: 1060px) 50vw,
                    33vw"
            className="object-cover rounded-md transition-transform duration-300 transform hover:scale-105"
          />
        ))}
      </div>
      <div className="font-bold text-lg text-accent-black">{name}</div>
      <div className="">{shortDescription}</div>
      {/* <p className="border bg-[#dde6f5] border-accent-orange py-1 px-6 rounded-md">${price}</p> */}
    </div>
  );
};

export default Card;
