import React from "react";
import Image from "next/image";

export default function Footer() {
  const cardData = [
    {
      testimonial:
        "The Canadian Home is absolutely amazing. It successfully surpasses all the other apps in this area. Their Chat function is what has been missing from online home search. The experts are always available with correct answers to anything.",
      author: "John Brown",
    },
    {
      testimonial:
        "The Canadian Home is absolutely amazing. It successfully surpasses all the other apps in this area. Their Chat function is what has been missing from online home search. The experts are always available with correct answers to anything.",
      author: "John Brown",
    },
  
  ];

  return (
   <div>
     <div className="w-full flex flex-col  bg-[#ECF4FA] h-[640px] items-center justify-center">
      <div className="flex mb-[30px] flex-col text-center">
        <h1 className="font-bold text-[20px]">The Canadian Home</h1>
        <h4 className="font-semibold">
          What customers say about the The Canadian Home experience
        </h4>
      </div>
      <div className="flex flex-row items-center justify-center gap-5 relative">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-[600px] h-[271px] rounded-[30px] text-center bg-white p-5"
          >
            <div className="flex -bottom-5 absolute ml-[500px]">
              <img className="bottom-0" src="/images/im1.png" alt="" />
              <img className="bottom-0" src="/images/im1.png" alt="" />
            </div>
            <div className="flex  -top-5 absolute">
              <img className="" src="/images/im4.png" alt="" />
              <img className="" src="/images/im4.png" alt="" />
            </div>

            <p className="text-[#606060] text-[12px] mt-24">
              {card.testimonial}
            </p>
            <h3 className="text-[18px] font-semibold">{card.author}</h3>
          </div>
        ))}
      </div>
      
    </div>
    <div className="w-full text-center h-[84px] flex items-center justify-center -bottom-6 left-0 right-0">
    <p className="text-[#7C7C7C] text-[14px]">
      Copyright © 2023 The Canadian Home Realty Inc.
    </p>
  </div>
   </div>
  );
}
