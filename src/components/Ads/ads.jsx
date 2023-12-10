import React from "react";
import Image from "next/image";

export default function Ads() {
  return (
    <div className="flex text-center flex-col w-full h-227px bg-[#F4F8FC]  p-7 items-center justify-center ">
      <h1 className="font-semibold">Featured On</h1>

      <div className="p-5 w-full flex flex-row items-center justify-center">
        <svg
          width="17"
          height="32"
          viewBox="0 0 17 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 1L1 16L16 31"
            stroke="#0D73C1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex flex-row px-6 gap-11">
          <Image src="/images/image1.png" width={123} height={67} />
          <Image src="/images/image2.png" width={180} height={67} />
          <Image src="/images/image3.png" width={195} height={67} />
          <Image src="/images/image4.png" width={185} height={67} />
          <Image src="/images/image5.png" width={242} height={67} />
          <Image src="/images/image6.png" width={118} height={67} />
        </div>
        <svg
          width="17"
          height="32"
          viewBox="0 0 17 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L16 16L1 31"
            stroke="#0D73C1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
