import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[100vh] page1-bg pt-25 overflow-x-hidden">
      <div className="flex lg:flex-row flex-col gap-10 items-center justify-center px-4 md:px-10 w-full">
        {/* Left Section */}
        <div className=" flex flex-col gap-4 page1-content max-w-xl">
          <Image
            src={assets.logox}
            alt="logo"
            width={250}
            height={250}
            className="w-[150px] h-auto md:w-[250px]"
          />
          <p className="sm:text-4xl text-2xl">
            BeDaie adalah jenama dibawah SifuTutor yang telah menyediakan
            perkhidmatan tutor peribadi sejak 2022.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-row gap-4 page1-content flex-wrap justify-center">
          {[
            { label: "Ditubuhkan", value: "2021" },
            { label: "Pelajar Bulanan", value: "1000+" },
            { label: "Kelas Harian", value: "300+" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 border-2 border-black text-center shadow-xl/30 lg:p-4 p-2"
            >
              <p className="font-medium lg:text-5xl text-3xl">{item.value}</p>
              <p className="font-light lg:text-4xl text-2xl">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Image */}
      <div className="w-full max-w-7xl px-4 md:px-10 mt-10 page1-content">
        <Image
          draggable={false}
          src={assets.mergeman}
          alt="suitman"
          width={1500}
          height={1000}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default AboutUs;
