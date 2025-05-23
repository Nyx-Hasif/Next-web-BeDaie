import React from 'react'
import Image from "next/image";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { assets } from "@/assets/assets";


const Daie = () => {

    const images = [
      {
        img: assets.daie_male[0],
        name: "Daie Annuar ",
      },
      {
        img: assets.daie_male[1],
        name: "Daie Azhar ",
      },
      {
        img: assets.daie_male[2],
        name: "Daie Kazim ",
      },
      {
        img: assets.daie_male[3],
        name: "Daie Syed ",
      },
      {
        img: assets.daie_female[0],
        name: "Daie Hanis ",
      },
      {
        img: assets.daie_female[1],
        name: "Daie Ezzah ",
      },
      {
        img: assets.daie_female[2],
        name: "Daie Nora ",
      },
      {
        img: assets.daie_female[3],
        name: "Daie Mashitah ",
      },


      
    ];

  return (
    <div className="min-h-[100vh] w-full  px-5 flex flex-col gap-6 justify-start items-center   py-20 page1-bg">
      <div className='text-center mt-4 page1-content'>
        <h1 className='md:text-7xl text-4xl font-bold'>Daie Bertauliah</h1>
      </div>
      <div className='flex flex-wrap items-center justify-center max-w-[80%]  page1-content'>
        {/* First Card */}
        {images.map((item, index) => {
          return (
            <div
              key={index}
              className=" group relative h-[379px] w-[300px] mx-[10px] my-[10px] rounded-[20px] overflow-hidden shadow-lg ">
              <div className="absolute inset-0 transition-transform duration-800 ease-in-out group-hover:scale-150">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover object-center group-hover:object-left transition-all duration-700 ease-in-out "
                  priority
                />
              </div>

              <div className="relative h-[342px] w-[260px] border-2 border-red-500 rounded-[15px] flex justify-center items-center m-auto mt-[18.5px] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                <h2 className="absolute bottom-[130px] left-[25px] w-[15px] text-white text-[30px] leading-none  drop-shadow-lg">
                  {item.name}
                </h2>
                <div className="absolute bottom-[30px] h-[100px] w-[70px] flex flex-row gap-2 items-center  text-white">
                  <FaInstagram className="text-[30px] transition-all duration-200 ease-in-out hover:text-[50px] cursor-pointer" />
                  <FaTwitter className="text-[30px] transition-all duration-200 ease-in-out hover:text-[50px] cursor-pointer" />
                  <FaFacebook className="text-[30px] transition-all duration-200 ease-in-out hover:text-[50px] cursor-pointer" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Daie
