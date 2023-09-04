"use client";
import Image from "next/image";
import aboutImage from "@/public/images/construction3.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/app/types/types";

type Props = {};

const About = (props: Props) => {
  return (
    <div id="aboutus" className="bg-alice-blue py-8">
      <div className="flex justify-center py-6">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">About Us</h1>
          <p className="underline underline-offset-8">
            Get to know about the company
          </p>
        </div>
      </div>
      {/* <!--About us section--> */}

      <section className="md:h-full  py-10 md:pb-0">
        <div className="mx-auto w-5/6 md:h-5/6 md:flex items-center justify-center">
          {/* description */}
          <div className="md:basis-3/5 items-center">
            <p className="text-sm">
              Travaux Limited was incorporated on 21<sup>st</sup> Jan 2023
               under the Companies Act, 2015 and the company is a
              PRIVATE LIMITED COMPANY. This is a duly registered Limited
              liability company with a certificate of incorporation number{" "}
              <strong>(PVT- RXU2G68Z)</strong>
              <br />
              <br />
              Today, The company is a general construction entity specializing
              in building and construction works and other electrical,
              mechanical, interior, and exterior works.
              <br />
              <br />
              Our Construction Company is a leading provider of construction
              services in the industry. With a strong track record of delivering
              high-quality projects, we have established ourselves as a trusted
              and reliable client partner. Our comprehensive services include
              residential, commercial, and industrial construction, renovation,
              and remodeling projects. We take pride in our commitment to
              excellence, safety, and customer satisfaction, which sets us apart
              from the competition.
            </p>
            <div className="my-8">
              <button className="rounded-md bg-accent-orange py-2 px-10 transition duration-300 hover:bg-orange-400 text-black">
                Learn more
              </button>
            </div>
          </div>
          {/* image */}
          <div className="flex  md:basis-2/5 justify-center md:ml-40 md:-mt-12  md:justify-items-end h-[350px]">
            <Image
              src={aboutImage}
              alt="about-image"
              width={700}
              height={150}
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
