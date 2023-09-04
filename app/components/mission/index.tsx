"use client";

import Image from "next/image";
import mission from "@/public/images/mission.jpg";
import vision from "@/public/images/vision.jpg";

type Props = {};

const Mission = (props: Props) => {
  return (
    <div id="mission" className="pb-12">
      <div className="mx-auto w-5/6">
        {/* Heading */}
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mr-4 underline underline-offset-8">
            Mission and Vision
          </h1>
        </div>
        {/* Mission */}
        <div className="flex md:flex-row flex-col items-center justify-center py-8">
          {/* content */}
          <div className="content md:basis-3/5">
            <h2 className="text-center font-extrabold text-accent-orange text-xl">
              Mission
            </h2>
            <p>
              Our mission is to deliver exceptional construction services by
              combining industry expertise, innovative techniques, and a
              commitment to client satisfaction. We aim to create spaces that
              inspire, improve communities, and leave a lasting positive impact
              on the environment.
            </p>
          </div>
          {/* image */}
          <div className="image flex pt-4 md:basis-3/5 md:ml-40 md:justify-items-end h-[300px]">
            <Image
              src={mission}
              alt="mission"
              width={500}
              height={200}
              className="object-cover rounded-md"
            />
          </div>
        </div>

        {/* Vision */}
        <div className="flex md:flex-row flex-col-reverse items-center justify-center">
          {/* image */}
          <div className="image flex pt-4 md:basis-3/5 md:mr-40 md:justify-items-start h-[300px]">
            <Image
              src={vision}
              alt="mission"
              width={500}
              height={200}
              className="object-cover rounded-md"
            />
          </div>
          {/* content */}
          <div className="content md:basis-3/5">
            <h2 className="text-center font-extrabold text-accent-orange text-xl">
              Vision
            </h2>
            <p>
              Our vision is to be the construction company of choice, renowned
              for our quality, reliability, and commitment to excellence. We
              strive to be a leader in sustainable construction practices,
              leveraging technology and embracing new trends to deliver projects
              that exceed expectations and stand the test of time.
            </p>
          </div>
        </div>
        {/* End */}
      </div>
    </div>
  );
};

export default Mission;
