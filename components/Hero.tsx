import React from "react";
import { assets } from "../assets/assets";
import Image from "next/image";
import Link from "next/link";

const Hero = ({ onBookingClick }: { onBookingClick: () => void }) => {
  return (
    <div className="w-full px-4 sm:px-8 py-8 flex flex-col lg:flex-row justify-evenly items-center gap-8 overflow-hidden page-bg pt-28 sm:pt-32 ">
      {/* Kiri: Teks */}
      <div className="flex flex-col gap-5 lg:w-1/2 w-full order-2 lg:order-1 page-content">
        <h1 className="text-4xl sm:text-7xl font-bold max-w-xl">
          Nak Belajar Mengaji Quran?
        </h1>

        <p className="text-xl sm:text-2xl max-w-2xl">
          Boleh belajar membaca Al-Quran secara online atau offline dengan waktu
          yang anda tentukan!
        </p>

        <div className="flex flex-wrap gap-4 mt-3">
          <button   onClick={onBookingClick} className="bg-black text-white text-lg sm:text-xl py-2 sm:py-3 px-6 rounded-xl cursor-pointer">
            Booking Kelas
          </button>
          <Link href="/buku">
            <button className="bg-black text-white text-lg sm:text-xl py-2 sm:py-3 px-6 rounded-xl cursor-pointer">
              Beli Buku
            </button>
          </Link>
        </div>

        {/* Tick Box */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-4">
          {[
            "Belajar online dan offline",
            "Tiada had umur untuk belajar",
            "Jadual belajar yang fleksibel",
          ].map((text, index) => (
            <div
              key={index}
              className="relative bg-[#83593f] text-white rounded-lg border border-black px-4 py-3 max-w-xs"
            >
              <p className="sm:text-lg text-sm">{text}</p>
              <Image
                src={assets.tick}
                alt="tick"
                width={60}
                height={60}
                className="absolute -bottom-4 -right-5"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Kanan: Gambar */}
      <div className="lg:w-1/2 w-full flex justify-center order-1 lg:order-2 page-content">
        <Image
          draggable={false}
          src={assets.hero}
          alt="hero"
          className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[650px] h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
