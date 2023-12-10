import React from "react";
import Image from "next/image";

const cardData = [
  {
    imageSrc: "/images/img1.png",
    title: "Visibility",
    description:
      "Your house will appear as a ‘featured listing’ on the home page, ensuring your house gets the maximum visibility",
  },
  {
    imageSrc: "/images/img2.png",
    title: "Real Local Agents",
    description:
      "You are backed by a team of Real estate agents who know the market in and out. With their market insights, experience and sound data, your home will sell in no time.",
  },
  {
    imageSrc: "/images/img3.png",
    title: "Email & Notification",
    description:
      "Users get instant notifications about new listings, price hikes, price drops, and neighborhood alerts. We get your property shown to people who are actively looking and eager to buy.",
  },
  {
    imageSrc: "/images/img4.png",
    title: "Professional photos",
    description:
      "With professional staging and photos, we make your house reach the best of its abilities and show it off because looks",
  },
];

export default function Middile() {
  return (
    <div className="bg-white w-full flex p-24 justify-center items-center gap-5 ">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="w-[374px] h-[414px] flex flex-col items-center text-center gap-4 justify-center "
        >
          <Image
            objectFit="cover"
            src={card.imageSrc}
            width={261}
            height={275}
            style={{ flexShrink: 0 }}
          />
          <h3 className="font-semibold text-[20px]">{card.title}</h3>
          <p className="text-[12px] text-[#8B8B8B]">{card.description}</p>
        </div>
      ))}
    </div>
  );
}
