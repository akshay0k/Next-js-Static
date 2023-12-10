import React from "react";
import Image from "next/image";

export default function Homes() {
  return (
    <div className="w-full  ">
      <div className="">
        <Image
          src="/images/white-cloud-blue-sky.jpg"
          fill
          className="absolute "
          sizes='100vw sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
        <Image
          objectFit="cover"
          className="relative mt-[75px]"
          src="/images/banner.png "
          width={1920}
          height={1280}
        />
      </div>

      <div className="absolute -mt-[600px] flex flex-col ml-[420px] text-center gap-3 items-center justify-center">
        <h1 className="font-semibold text-[30px]">
          Thinking of selling your home?
        </h1>
        <p className="font-normal text-[14px]">
          Get an instant estimate of your home’s value. You can quickly
          determine the estimated value of <br /> your home by answering a few
          quick questions.
        </p>
        <input
          type="email"
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Enter your email"
        />
        <button className=" bg-[#0D73C1] text-[12px] w-[160px] text-white p-3 rounded-full">
          Get free estimate
        </button>
      </div>
    </div>
  );
}
