"use client";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "@/public/images/construction1.jpg";
import image2 from "@/public/images/construction2.jpg";
import image3 from "@/public/images/construction3.jpg";
import image4 from '@/public/images/construction4.jpg';

type Props = {};

const Homes = (props: Props) => {
  return (
    <div id="home">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        interval={3000}
      >
        <div className="w-full h-[60vh] sm:h-[90vh] relative">
          <Image src={image1} alt="logo" fill className="object-cover" placeholder="blur"/>
          <div
            className="absolute text-white top-[46%] md:left-[10%] p-[20px]
           bg-gray-400 rounded backdrop-filter backdrop-blur-md bg-opacity-10"
          >
            <h1 className="font-bold text-2xl md:text-[30px] pt-3 px-8 text-alice-blue">
              Welcome to Travaux ltd
            </h1>
            <p className="text-base md:text-lg pb-1 font-bold">Building a concrete future</p>
          </div>
        </div>
        <div className="w-full h-[60vh] sm:h-[90vh] relative">
          <Image src={image2} alt="logo" fill className="object-cover" placeholder="blur"/>
          <div
            className="absolute text-white top-[46%] md:left-[10%]
           bg-gray-400 rounded backdrop-filter backdrop-blur-md bg-opacity-10 p-[20px]"
          >
            <h1 className="font-bold text-2xl md:text-[30px] pt-3 px-8 text-alice-blue">
              Welcome to Travaux ltd
            </h1>
            <p className="text-base md:text-lg pb-1 font-bold">We offer the best...</p>
          </div>
        </div>
        <div className="w-full h-[60vh] sm:h-[90vh] relative">
          <Image src={image3} alt="logo" fill className="object-cover" placeholder="blur" />
          <div
            className="absolute text-white top-[46%] md:left-[10%] p-[20px]
           bg-gray-400 rounded backdrop-filter backdrop-blur-lg  bg-opacity-10"
          >
            <h1 className="font-bold text-2xl md:text-[30px] pt-3 px-8 text-alice-blue">
              Welcome to Travaux ltd
            </h1>
            <p className="text-base md:text-lg pb-1 font-bold">We offer the best...</p>
          </div>
        </div>
        <div className="w-full h-[60vh] sm:h-[90vh] relative">
          <Image src={image4} alt="logo" fill className="object-cover" placeholder="blur" />
          <div
            className="absolute text-white top-[46%] md:left-[10%] p-[20px]
           bg-gray-400 rounded backdrop-filter backdrop-blur-md bg-opacity-10"
          >
            <h1 className="font-bold text-2xl md:text-[30px] pt-3 px-8 text-alice-blue">
              Welcome to Travaux ltd
            </h1>
            <p className="text-base md:text-lg pb-1 font-bold">We offer the best...</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Homes;
