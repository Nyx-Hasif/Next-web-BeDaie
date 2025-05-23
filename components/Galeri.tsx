import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Galeri = () => {
  return (
    <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-screen pt-20">
      <Image
        src={assets.gallery_bg}
        alt="ekosistem"
        width={0}
        height={0}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Combine cloud + text in one flex container */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="relative">
          <Image
            src={assets.cloud}
            alt="awan"
            width={300}
            height={200}
            className="w-[150px] h-[100px] md:w-[300px] md:h-[200px] object-contain"
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-xl md:text-6xl font-bold text-black">
            Galeri
          </h1>
        </div>
      </div>

    </div>
  );
};

export default Galeri;
