"use client";

import Image from "next/image";
import collins from "@/public/images/collins.png";
import vincent from "@/public/images/vincent.png";
import martha from "@/public/images/martha.png";
import edmund from "@/public/images/edmund.png";
import allan from "@/public/images/Allan.png";
import madilani from "@/public/images/madilani.png";
import mercy from "@/public/images/mercy.png";

type Props = {};

const Team = (props: Props) => {
  return (
    <div id="team" className="mx-auto w-5/6 pb-8">
      {/* Heading */}
      <div className="flex justify-center items-center pb-8">
        <h1 className="text-lg md:text-3xl font-bold underline underline-offset-8">
          Meet <span className="text-accent-orange">the team</span>
        </h1>
      </div>

      {/* CEO */}
      <div className=" flex items-center justify-center pb-4">
      <div className="bg-accent-black text-accent-white py-8 rounded-md w-full flex flex-col gap-1 items-center max-w-[500px] shadow-lg md:shadow-xl">
       <div
          style={{ height: "200px" }}
        >
          <Image
            src={collins}
            alt="ceo"
            height={200}
            width={300}
            className="object-cover rounded-md object-top"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
        <div className="font-bold text-xl">Qs Collins Githinji</div>
          <div className="text-accent-orange font-semibold">Executive Director</div>
          <div className="md:px-12 px-2">
           <span className="font-extrabold text-3xl text-accent-orange">&quot;</span> On behalf of the entire team at Travaux, I would like to express our
            sincere gratitude for your trust in our capabilities. We are excited
            about the future and eager to embark on new construction ventures
            that push the boundaries of innovation and redefine excellence<span className="font-extrabold text-3xl text-accent-orange">&quot;</span>
          </div>
       </div>
      </div>
      
      {/* Team */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* members*/}
       <div className="bg-accent-black text-accent-white  py-4 rounded-md w-full flex flex-col gap-2 items-center shadow-lg md:shadow-xl">
       <div
          style={{ height: "200px" }}
          className="px-2"
        >
          <Image
            src={vincent}
            alt="ceo"
            height={200}
            width={300}
            className="object-cover rounded-md object-top"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
        <div className="font-bold text-xl">Qs Vincent Mavisi</div>
          <div className="text-accent-orange font-semibold">Project Manager/Qs</div>
       </div>
        {/* member */}
        <div className="bg-accent-black text-accent-white py-4 rounded-md w-full flex flex-col gap-2 items-center shadow-lg md:shadow-xl">
       <div
          style={{ height: "200px"}}
          className="px-2"
        >
          <Image
            src={martha}
            alt="ceo"
            height={200}
            width={300}
            className="object-cover rounded-md object-top"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
        <div className="font-bold text-xl">Martha Karanja</div>
          <div className="text-center text-accent-orange font-semibold">Human Resource Manager</div>
       </div>       
       {/* member */}
       <div className="bg-accent-black text-accent-white py-4 rounded-md w-full flex flex-col gap-2 items-center shadow-lg md:shadow-xl">
       <div
          style={{ height: "200px"}}
          className="px-2"
        >
          <Image
            src={edmund}
            alt="ceo"
            height={200}
            width={300}
            className="object-cover rounded-md object-top"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
        <div className="font-bold text-xl">Edmund Muloma</div>
          <div className="text-accent-orange font-semibold">IT Manager</div>
       </div>
         {/* member */}
         <div className="bg-accent-black text-accent-white py-4 rounded-md w-full flex flex-col gap-2 items-center shadow-lg md:shadow-xl">
       <div
          style={{ height: "200px"}}
          className="px-2"
        >
          <Image
            src={allan}
            alt="ceo"
            height={200}
            width={300}
            className="object-cover rounded-md object-top"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
        <div className="font-bold text-xl">Allan Okoti</div>
          <div className="text-accent-orange font-semibold">Interior Designer</div>
       </div>
          {/* member */}
          <div className="bg-accent-black text-accent-white py-4 rounded-md w-full flex flex-col gap-2 items-center shadow-lg md:shadow-xl">
       <div
          style={{ height: "200px"}}
          className="px-2"
        >
          <Image
            src={madilani}
            alt="ceo"
            height={200}
            width={300}
            className="object-cover rounded-md object-top"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
        <div className="font-bold text-xl">Francesca Madilani</div>
          <div className="text-accent-orange font-semibold">Site Engineer</div>
       </div>
          {/* member */}
          <div className="bg-accent-black text-accent-white py-4 rounded-md w-full flex flex-col gap-2 items-center shadow-lg md:shadow-xl">
       <div
          style={{ height: "200px"}}
          className="px-2"
        >
          <Image
            src={mercy}
            alt="ceo"
            height={200}
            width={300}
            className="object-cover rounded-md object-top"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
        <div className="font-bold text-xl">Mercy Ndanu</div>
          <div className="text-accent-orange font-semibold text-center">Business Development Manager</div>
       </div>
       {/* end */}
      </div>
    </div>
  );
};

export default Team;
