import Image from "next/image";
import React from "react";

const Cards = () => {
  return (
    <div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10">
        <Image
          src="/design.png"
          width={100}
          height={100}
          className="mx-auto block"
        />
        <h3 className="text-lg font-medium pt-8 pb-2">Design Skills</h3>
        <h4>Design tools used</h4>
        <p className="text-gray-800 py-1">Lightroom</p>
        <p className="text-gray-800 py-1">Figma</p>
      </div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10">
        <Image
          src="/code.png"
          width={100}
          height={100}
          className="mx-auto block"
        />
        <h3 className="text-lg font-medium pt-8 pb-2">Programming Skills</h3>
        <h4>Some of the programming languages that I use:</h4>
        <p className="text-gray-800 py-1">Javascript</p>
        <p className="text-gray-800 py-1">Java</p>
        <p className="text-gray-800 py-1">Python</p>
      </div>
    </div>
  );
};

export default Cards;
