"use client";

import Image from "next/image";
import logo from "@/public/images/logo.jpeg";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { BiLogoTwitter } from "react-icons/bi";

type Props = {};

const Footer = (props: Props) => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="pt-12">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <Image
            src={logo}
            alt="logo"
            height="100"
            width="100"
            className="object-cover"
          />
          <p className="py-5">
            At our Construction Company, we are passionate about delivering
            exceptional construction services while upholding our core values.
            With a focus on excellence, integrity, collaboration, and safety, we
            are dedicated to creating spaces that make a positive difference in
            the communities we serve.
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-extrabold text-lg text-accent-gray">Address</h4>
          <p className="my-5">RFH Plaza, Eastern Bypass,</p>
          <p className="my-5">2nd Floor,Rm No. 2</p>
          <p className="my-5">P.O Box 53182-00200</p>
          <p>Nairobi-Kenya.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-extrabold text-lg text-accent-gray">
            Contact Us
          </h4>
          <p className="my-5">travauxlimited@gmail.com</p>
          <p className="my-5">(+254)-729-304-190</p>
          <div className="flex items-center gap-2">
            <FaFacebook className="h-6 w-6 text-[#3b5998]" />
            <FaWhatsapp className="h-6 w-6 text-[#25D366]" />
            <FaInstagram className="h-6 w-6 text-[#962fbf]" />
            <BiLogoTwitter className="h-6 w-6 text-[#00acee]" />
          </div>
        </div>
      </div>
      <p className="text-center py-4 font-extrabold text-accent-black">
        &copy; {currentYear} <span className="text-accent-orange">TRAVAUX LTD</span>  All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
